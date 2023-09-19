import React from "react";
import Layout from "../components/Layout";
import { Box, Typography } from "@mui/material";
const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": { fontWeight: "bold", my: 2, fontSize: "2rem" },
          "& p": { textAlign: "justify" },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": { fontSize: "1.8rem" },
            "& p": { fontSize: "1.6rem" },
          },
        }}
      >
        <Typography variant="h4">Welcome to My Restaurant</Typography>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
          quaerat nesciunt? Nam inventore at aperiam, impedit quibusdam
          architecto rerum pariatur dolores ea est nesciunt non modi facilis
          quia obcaecati ut molestiae odio eveniet perferendis deleniti quae
          voluptate voluptatibus aut itaque. Nisi quaerat blanditiis iusto
          debitis laboriosam incidunt, sint rerum! Itaque delectus tempora
          nostrum, a obcaecati quasi impedit culpa ea earum deleniti inventore
          enim doloribus quae voluptas expedita corrupti facilis ipsa sequi
          autem! Provident similique unde magnam quibusdam nemo nobis,
          obcaecati, consequatur laborum expedita praesentium nisi facilis
          soluta autem sequi itaque enim omnis, asperiores minima accusamus
          atque impedit! Distinctio, totam ab?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
          aliquam voluptatibus nam assumenda nostrum reiciendis omnis odio
          incidunt laboriosam sed cumque sint eaque maiores rerum quae
          consequatur recusandae minima, dolor aut placeat excepturi similique
          accusantium culpa qui. Magnam, deleniti maiores. Eligendi, facilis.
          Nobis dolore, error eius quis necessitatibus neque, doloribus sapiente
          fugit suscipit totam culpa at impedit adipisci, perferendis
          consequatur natus praesentium debitis! Exercitationem atque amet quas
          illo ipsum ex, sed asperiores repellendus maxime sapiente, harum eos?
          Nulla tempore ad magni. Ex in quo qui amet doloribus nisi molestiae
          ipsam soluta, non eius illo ullam facilis? Perferendis illum neque
          alias.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
