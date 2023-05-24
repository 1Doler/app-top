import styles from "./Search.module.css";
import {
  DetailedHTMLProps,
  HtmlHTMLAttributes,
  KeyboardEvent,
  useState,
} from "react";
import cn from "classnames";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import GlassIcon from "./glass.svg";
import { useRouter } from "next/router";
interface SearchProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const goToSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        q: search,
      },
    });
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key == "Enter") {
      goToSearch();
    }
  };

  return (
    <div className={cn(styles.search, className)} {...props}>
      <Input
        placeholder="Search"
        value={search}
        className={styles.input}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        apperance="primary"
        className={styles.button}
        onClick={goToSearch}
      >
        <GlassIcon />
      </Button>
    </div>
  );
};
