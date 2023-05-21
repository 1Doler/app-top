import React, { useEffect } from "react";
import { Htags, Button, P } from "../components";
import { Tag } from "../components/Tag/Tag";
function Home(): JSX.Element {
  useEffect(() => {
    console.log("homme");
  });

  return (
    <div>
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
    </div>
  );
}

export default Home;
