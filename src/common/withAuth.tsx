import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAccessToken } from "../state/access_token";

const withAuth = <Props,>(Component: NextPage<Props>) => {
  const WithAuth: NextPage<Props> = (props) => {
    const token = useAccessToken();
    const router = useRouter();

    useEffect(() => {
      if (token === undefined) {
        router.replace("/login");
      }
    }, [token, router]);

    if (token === undefined) {
      return null;
    }

    return <Component {...props} />;
  };

  return WithAuth;
};

export default withAuth;