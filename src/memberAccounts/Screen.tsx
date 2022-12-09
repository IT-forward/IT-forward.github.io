import { MemberType } from "./MemAccount";
import MemAccount from "./MemAccount";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "./data";

interface ParamTypes {
  id: string;
}

function Screen() {
  const [member, setMember] = useState<MemberType | undefined>();

  const { id } = useParams<ParamTypes>();
  const idInt = (parseInt(id) || 1) - 1;
  useEffect(() => {
    setMember(data[idInt]?.member);
  }, []);

  if (member) {
    return <MemAccount {...member} />;
  } else {
    return <></>;
  }
}

export default Screen;
