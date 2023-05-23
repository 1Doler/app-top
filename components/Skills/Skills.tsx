import styles from "./Skills.module.css";
import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";
import cn from "classnames";
import { Tag } from "../Tag/Tag";
import { Htags } from "../Htags/Htags";

interface SkillsProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  tags: string[];
}

export const Skills = ({
  className,
  tags,
  ...props
}: SkillsProps): JSX.Element => {
  return (
    <div className={cn(styles.skills, className)} {...props}>
      <Htags tag={"h2"}>Получаемые навыки</Htags>
      <div className={styles.items}>
        {tags.map((t) => (
          <Tag color="primary">{t}</Tag>
        ))}
      </div>
    </div>
  );
};
