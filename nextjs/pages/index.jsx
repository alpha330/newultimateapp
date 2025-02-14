/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Head from "next/head";
import { useSelector } from "react-redux";
import { H2 } from "@/components";
import jobs from "@/public/jsonData/jobs.json"
import { JobItem } from "@/components";


export default function Home() {
  const mainDivMainPage = css`
      width:100%;
      text-align:center;
    `;
  const homeView = css`
    grid-row: 2/6;
    grid-column: 2/10;
    background:white;
    width:100%;
    height:100%;
    display:flex;
    alig-items:center;
    justify-content: space-evenly;
    flex-direction:column;
  `;

  const jobDiv = css`
    width:90%;
    height:50%;
    align-self: center;
    border-radius:5px;
    box-shadow:1rem 1rem 1rem rgba(0, 0, 0, 0.39);
    display:flex;
    alig-items:center;
    justify-content: space-between;
    flex-direction:column;
    overflow-y: auto;
    overflow-x: hidden;
    padding:1rem;
  `;
  const jobTitle = css`
    width:90%;
    height:10%;
    align-self: center;
  `;

  const auth = useSelector((state)=>state.auth)
  console.log("auth",auth)
  return (
    <>
      <Head>
        <title>جاب هوم</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main css={mainDivMainPage}>
        <div css={homeView}>
          <div css={jobTitle}>
          {(!auth || !auth.logged) && <H2> تسک یاب </H2>}
          {auth && auth.logged && auth.email}
          </div>
          <div css={jobDiv}>
            {jobs.map((item)=>(
              <JobItem
              jobType={item.jobType}
              jobSkills={item.jobSkills}
              jobStatus={item.jobStatus}
              contractType={item.contractType}
              contractStatus={item.contractStatus}
              jobImage={item.jobImage}
              key={item.id}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
