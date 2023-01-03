import { Header, Heading, InputDiv, TopHead, Desc } from "./style";
import Search from "./../assets/Images/serach.svg";
import Up from "./../assets/Images/upArrow.svg";
import { CallApi } from "./queryFunctions";
import { SharedModal } from "../Modal/sharedModal";
import DetailModal from "./Components/Modal";
import { useEffect, useState } from "react";
import axios from "axios";

export const ListDoc = () => {
  const [id, setID] = useState<any>("");
  const [teamData, setTeamData] = useState("");
  const [search, setSearch] = useState("");
  const { data, isLoading, isError, error, isFetching } = CallApi();

  useEffect(() => {
    if (id) {
      axios
        .get(`https://www.balldontlie.io/api/v1/games/${id}`)
        .then(function (response) {
          setTeamData(response?.data);
        });
    }
  }, [id]);

  const detailmodal = SharedModal({
    children: (
      <DetailModal data={teamData} close={() => detailmodal.setOpen(false)} />
    ),
  });
  return (
    <>
      {detailmodal.component}

      <Header>
        <Heading>NBA TEAMS</Heading>
        <InputDiv>
          <img src={Search} alt="searchIcon" />
          <input
            type="search"
            onChange={(e: any) => setSearch(e.target.value)}
            value={search}
          />
        </InputDiv>
        <TopHead>
          <div>Team Name</div>
          <div>
            City{" "}
            <span>
              <img src={Up} alt="upArrow" />
            </span>
          </div>
          <div>Abbreviation</div>
          <div>Conference</div>
          <div>Division</div>
        </TopHead>
        {data?.data?.data
          ?.filter((item: any) => {
            return search.toLowerCase() === ""
              ? item
              : item.full_name.toLowerCase().includes(search);
          })
          .map(
            (
              {
                id,
                full_name,
                city,
                division,
                abbreviation,
                conference,
              }: {
                id: number;
                full_name: string;
                city: string;
                division: string;
                abbreviation: string;
                conference: string;
              },
              index: number
            ) => {
              return (
                <>
                  <Desc
                    key={index}
                    onClick={() => {
                      setID(id);
                      detailmodal.setOpen(true);
                    }}
                  >
                    <div>{full_name}</div>
                    <div>{city}</div>
                    <div>{abbreviation}</div>
                    <div>{conference}</div>
                    <div>{division}</div>
                  </Desc>
                </>
              );
            }
          )}
      </Header>
    </>
  );
};
