import React from "react";
import { Typography, Radio, Card, Input } from "@material-tailwind/react";

export default function Faculty_Loading() {
  return (
    <>
      <div className="mt-10"></div>
      <div>
        <Card className="w-[1500px] h-full px-10 py-10">
          <h1 className="text-center text-2xl font-bold">FACULTY LOADING</h1>
          <Typography className="text-left text-2xl font-bold">
            INPUTS
          </Typography>
          <Typography>
            1.The institution has clear policies on faculty loading that
            complies with the minimum requirements of the Commission on Higher
            Education in terms of the following:  Academic Qualifications 
            Field of Specialization  Number of Preparations  Number of Units
            of Teaching Loads; and Administrative Support.
          </Typography>
          <Radio name="type" label="1" />
          <Radio name="type" label="2" />
          <Radio name="type" label="3" />
          <Radio name="type" label="4" />
          <Radio name="type" label="5" />
          <Typography>
            2.. The institutional system on faculty loading contains specific
            provisions for faculty with additional responsibilities which
            includes the following: a. Rewards b. Service credits c. Honorarium
            d. Points for promotions e. Ranking, recognitions
          </Typography>
          <Radio name="type" label="1" />
          <Radio name="type" label="2" />
          <Radio name="type" label="3" />
          <Radio name="type" label="4" />
          <Radio name="type" label="5" />
          <Typography className="text-left text-2xl font-bold">
            PROCESSES
          </Typography>
          <Typography>
            1.Ratio of full time to part time faculty is 7 is to 3 as shown in
            the Summary of teaching assignment duly signed by the designated
            authority.
          </Typography>
          <Radio
            name="type"
            label="1 - 30% of the faculty members are full-time teachers"
          ></Radio>
          <Radio
            name="type"
            label="2 - 40% of the faculty members are full-time teachers"
          ></Radio>
          <Radio
            name="type"
            label="3 - 50% of the faculty members are full-time teachers"
          ></Radio>
          <Radio
            name="type"
            label="4 - 60% of the faculty members are full-time teachers"
          ></Radio>
          <Radio
            name="type"
            label="5 - 70% of the faculty members are full-time teachers"
          ></Radio>
          <Typography>
            2.The faculty members teach their major and minor fields of
            specialization.
          </Typography>
          <Radio
            name="type"
            label="1 - 20% of the members of the faculty are given teaching
assignments only in their major and minor fields of
specialization."
          ></Radio>
          <Radio
            name="type"
            label="2 - 30% of the members of the faculty are given teaching
assignments only in their major and minor fields of
specialization."
          ></Radio>
          <Radio
            name="type"
            label="3 - 50%of the members of the faculty are given teaching
assignments only in their major and minor fields of
specialization."
          ></Radio>
          <Radio
            name="type"
            label="4 - 65%of the members of the faculty are given teaching 
Page | 38
assignments only in their major and minor fields of
specialization."
          ></Radio>
          <Radio
            name="type"
            label="5 - 75%of the members of the faculty are given teaching
assignments only in their major and minor fields of
specialization."
          ></Radio>
          <Typography>
            3.Full-time faculty teaching load per week is in accordance with
            acceptable standards.
          </Typography>
          <Radio
            name="type"
            label="1 - 10% of the faculty members have more than 30 units
maximum load"
          ></Radio>
          <Radio
            name="type"
            label="2 - 35% of the faculty members have 30 units maximum
load"
          ></Radio>
          <Radio
            name="type"
            label="3 - 50% of the faculty members have 27 units maximum
load"
          ></Radio>
          <Radio
            name="type"
            label="4 - 65% of the faculty members have 24 units maximum
load"
          ></Radio>
          <Radio
            name="type"
            label="5 - 75% of the faculty members have 21 units maximum
load"
          ></Radio>
          <Typography>
            4.Faculty with concurrent or special designations are given the
            following rewards and incentives: a. Equivalent teaching units b.
            Service credits c. Honorarium d. Points for promotion, Ranking or
            recognitions.
          </Typography>
          <Radio
            name="type"
            label="1 - no provision for incentives exhibited"
          ></Radio>
          <Radio
            name="type"
            label="2 - two of the mentioned items for incentives are present"
          ></Radio>
          <Radio
            name="type"
            label="3 - three of the mentioned items for incentives are present"
          ></Radio>
          <Radio
            name="type"
            label="4 - four of the mentioned items for incentives are present"
          ></Radio>
          <Radio
            name="type"
            label="5 - All of the mentioned items for incentives are present"
          ></Radio>
          <Typography>
            5.Some faculty members are given special assignments such as: Page |
            39 a. Program/Project Coordinator/Member b. Chairmanship c. Student
            Organization Advisorship d. Other special tasks .
          </Typography>
          <Radio name="type" label="1"></Radio>
          <Radio name="type" label="2"></Radio>
          <Radio name="type" label="3"></Radio>
          <Radio name="type" label="4"></Radio>
          <Radio name="type" label="5"></Radio>
          <Typography className="text-left text-2xl font-bold">
            OUTPUT
          </Typography>
          <Typography>
            1.Faculty load complies with CHED requirements.
          </Typography>
          <Radio name="type" label="1"></Radio>
          <Radio name="type" label="2"></Radio>
          <Radio name="type" label="3"></Radio>
          <Radio name="type" label="4"></Radio>
          <Radio name="type" label="5"></Radio>
          <Typography className="text-left text-2xl font-bold">
            Comments
          </Typography>
          <Input label="Best Practices"></Input>
        </Card>
      </div>
    </>
  );
}
