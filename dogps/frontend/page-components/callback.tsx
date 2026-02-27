"use client";
import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function Callback() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const code = searchParams.get("code");

    if (code) {
      fetch("http://localhost:3001/auth/callback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      })
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
          router.push("/find-a-dog");
        })
        .catch((error) => {
          console.error("Authentication failed:", error);
          router.push("/");
        });
    } else {
      router.push("/");
    }
  }, [searchParams, router]);

  return (
    <div>
      <h2>Logging you in...</h2>
    </div>
  );
}

export default Callback;