import { ListSkillProps } from "../../../../type/skill.interface";
import { SkillItem, SkillItemInner } from "./style";

const BlockSkill = ({ name }: ListSkillProps) => {
  return (
    <>
      <SkillItem>
        <SkillItemInner id="stick-title">{name}</SkillItemInner>
      </SkillItem>
    </>
  );
};

export default BlockSkill;
