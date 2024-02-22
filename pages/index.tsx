import { Box, CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;

    window.location.href = `vitrineaapp://product/${id}`;
    setTimeout(() => {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.sv.vitrinnea.ltda";
    }, 2000);
  }, [router.query]);

  return (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <CircularProgress />
    </Box>
  );
}
