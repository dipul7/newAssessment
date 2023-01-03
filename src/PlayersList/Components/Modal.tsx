import { Close, DataDiv } from "./style";

interface I_MetaIdProps {
  close: () => void;
  data?: any;
}

const DetailModal = (props: I_MetaIdProps) => {
  const { data, close } = props;
  return (
    <>
      <Close onClick={close}>X</Close>

      <DataDiv>
        <div>{data?.home_team?.full_name}</div>
        <div>
          <b>Random Game Details:</b>
        </div>
        <div>
          Date:<span>{data?.date}</span>
        </div>
        <div>
          Team Score:<span>{data?.home_team_score}</span>
        </div>
        <div>
          Season:<span>{data?.season}</span>
        </div>
        <div>
          Team Full Name:<span>{data?.home_team?.full_name}</span>
        </div>
        <div>
          Visitor Team Name:<span>{data?.visitor_team?.full_name}</span>
        </div>
        <div>
          Visitor Team Score:<span>{data?.visitor_team_score}</span>
        </div>
      </DataDiv>
    </>
  );
};

export default DetailModal;
