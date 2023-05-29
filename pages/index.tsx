import React, { useState } from "react";
import { Htags, Button, P, Rating, Input, Textarea } from "../components";
import { Tag } from "../components/Tag/Tag";
import { withLayout } from "../layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { IMenuItem } from "../interfaces/menu.interface";
import { API } from "../helpers/api";

function Home(): JSX.Element {
  const [rating, setRating] = useState(4);
  return (
    <>
      <Htags tag="h1">Home</Htags>
      <Button apperance="ghost" arrow="right">
        Button
      </Button>
      <P size="l">TEXfasdf asdfasdf asdfas fdsafs</P>
      <P size="m">TEXfasdf asdfasdf asdfas fdsafs</P>
      <P size="s">TEXfasdf asdfasdf asdfas fdsafs</P>
      <Tag size="m" color="primary">
        Adobe photoshop
      </Tag>
      <Tag size="m" color="red">
        Adobe photoshop
      </Tag>
      <Tag size="s" color="ghost">
        Adobe photoshop
      </Tag>
      <Tag size="s" color="green">
        Adobe photoshop
      </Tag>
      <Tag size="m" color="grey">
        Adobe photoshop
      </Tag>
      <Rating isEditable={true} rating={rating} setRating={setRating} />
      <Input placeholder="text" />
      <Textarea placeholder="text" />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, {
    firstCategory,
  });
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};
