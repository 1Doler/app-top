import React, { useEffect, useState } from "react";
import { Htags, Button, P, Rating } from "../components";
import { Tag } from "../components/Tag/Tag";
import { withLayout } from "../layout/Layout";
function Home(): JSX.Element {
  const [rating, setRating] = useState(4);

  useEffect(() => {
    console.log("homme");
  });

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
    </>
  );
}

export default withLayout(Home);
