import { NextApiHandler } from "next";
import nookies from "nookies";
import {
  SPOTIFY_API_TOKEN_URL,
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_REDIRECT_URI,
} from "../../common/constant";
import { AccessToken } from "../../common/token";

const callback: NextApiHandler<void> = async (req, res) => {
  if (req.method !== "GET") {
    res.status(405).send(); // method not allowed
    return;
  }

  const stateFromCookies = nookies.get({ req }).state;
  const stateFromRequest = req.query.state;

  if (
    typeof stateFromCookies === "string" &&
    typeof stateFromRequest === "string" &&
    stateFromCookies === stateFromRequest &&
    typeof req.query.code === "string"
  ) {
    const params = new URLSearchParams({
      grant_type: "authorization_code", // 御作法
      code: req.query.code,
      redirect_uri: SPOTIFY_REDIRECT_URI,
      client_id: SPOTIFY_CLIENT_ID,
      client_secret: SPOTIFY_CLIENT_SECRET,
    });

    const headers = await fetch(SPOTIFY_API_TOKEN_URL, {
      method: "POST",
      body: params,
    });

    if (!headers.ok) {
      res.status(400).send();
      return;
    }

    const response: AccessToken = await headers.json();
    nookies.set({ res }, "next-spotify-app-token", JSON.stringify(response), {
      httpOnly: true,
      path: "/",
    });

    res.redirect("/");
  } else {
    res.status(400).send(); // bad request(パラメータが不足している)
    return;
  }
};

export default callback;
