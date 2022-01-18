import { NextPage } from "next";
import { GetServerSideProps } from "next";
import {useRouter} from "next/router"
import nookies from "nookies";
import {useEffect} from "react"
import {
  SPOTIFY_API_TOKEN_URL,
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_REDIRECT_URI,
} from "../common/constant";
import {useSetAccessToken} from "../state/access_token"

type Props = {
  access_token: string;
};

const Callback: NextPage<Props> = ({ access_token }) => {
  const setAccessToken = useSetAccessToken()
  const router = useRouter()

  useEffect(() => {
    setAccessToken(access_token)

    router.replace("/")
  },[setAccessToken, access_token,router])

  return null;
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
  req,
}) => {
  const stateFromCookies = nookies.get({ req }).state;
  const stateFromRequest = query.state;

  if (
    typeof stateFromCookies === "string" &&
    typeof stateFromRequest === "string" &&
    stateFromCookies === stateFromRequest &&
    typeof query.code === "string"
  ) {
    const params = new URLSearchParams({
      grant_type: "authorization_code",
      code: query.code,
      redirect_uri: SPOTIFY_REDIRECT_URI,
      client_id: SPOTIFY_CLIENT_ID,
      client_secret: SPOTIFY_CLIENT_SECRET,
    });

    const header = await fetch(SPOTIFY_API_TOKEN_URL, {
      method: "POST",
      body: params,
    });

    if (header.ok) {
      const response = await header.json();
      return {
        props: { access_token: response.access_token },
      };
    }
  }

  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
};

export default Callback;
