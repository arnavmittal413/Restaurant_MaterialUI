import React from "react";
import Layout from "../components/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import MenuList from "../data/Data";
 const Menu = () => {
  return (
    <Layout>
      <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
        {MenuList.map((menu) => (
          <Card sx={{maxWidth:"390px", m:2}}>
            
              <CardMedia
                sx={{minHeight: "400px"}}
                image={menu.image}
              />  
            <CardContent>
              <Typography variant="h5" gutterBottom component={"div"}>
                {menu.name}
              </Typography>
              <Typography variant="body2"  component={"div"}>
                {menu.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
