import { SkillItem, SkillItemInner } from "./style";

const BlockSkill = ({ nameSkill }: any) => {
  return (
    <>
      <SkillItem>
        <SkillItemInner>{nameSkill} </SkillItemInner>{" "}
      </SkillItem>
    </>
  );
};

export default BlockSkill;
