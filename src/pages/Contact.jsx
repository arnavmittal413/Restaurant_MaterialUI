import React from "react";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Layout from "../components/Layout";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 10,
          ml: 10,
          "& h4": { fontWeight: "bold", mb: 2 },
          "@media (max-width:600px)": {
            "& p": { fontSize: "1.8rem" },
          },
        }}
      >
        <Typography variant="h4">Contact My Restaurant</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          voluptas veniam mollitia perspiciatis adipisci. Natus quasi reiciendis
          deserunt nisi quis minima at cupiditate quas modi eveniet, commodi
          possimus nulla eligendi?
        </p>
        <Box
          sx={{
            m: 3,
            width: "600px",
            ml: -1,
            "@media (max-width:600px)": {
              width: "300px",
              ml: 4,
            },
          }}
        >
          <TableContainer component={Paper}>
            <Table aria-label="contact table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ bgcolor: "black", color: "white" }}
                    align="center"
                  >
                    Contact Details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{ color: "red", pt: 1 }} />{" "}
                    1800-00-0000
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <EmailIcon sx={{ color: "skyblue", pt: 1 }} />{" "}
                    help@myrest.com
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <PhoneIcon sx={{ color: "green", pt: 1 }} /> 1234567890
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Layout>
  );
};

export default Contact;
