import React from "react";
import { Card, Typography, Input, Radio } from "@material-tailwind/react";

export default function Professional_Performance_and_Scholarly_Work() {
  return (
    <>
      <div className="mt-10"></div>
      <div>
        <Card className="w-[1500px] h-full px-10 py-10">
          <h1 className="text-center text-2xl font-bold">
            PROFESSIONAL PERFORMANCE AND SCHOLARLY WORK
          </h1>
          <Typography className="text-left text-2xl font-bold">
            INPUTS
          </Typography>
          <Typography>
            1.The institution has clear policies and programs on research that
            promotes research capability and engagements.
          </Typography>
          <Radio name="type" label="1" />
          <Radio name="type" label="2" />
          <Radio name="type" label="3" />
          <Radio name="type" label="4" />
          <Radio name="type" label="5" />
          <Typography>
            2.The institution has specific budget for research such as: a.
            Incentives for research engagements; b. Support for research
            presentation; and c. Support for research publications.
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
            1.The institution provides support for research and publication
            through allocation of a budget for the following: a. Honorarium; b.
            Deloading; c. Service credits; and d. Seminars and trainings on
            research.
          </Typography>
          <Radio
            name="type"
            label="1 - no support provided for research and publication"
          ></Radio>
          <Radio
            name="type"
            label="2 - one (1) of the mentioned support are provided"
          ></Radio>
          <Radio
            name="type"
            label="3 - two (2) of the mentioned supports are provided"
          ></Radio>
          <Radio
            name="type"
            label="4 - three (3) of the mentioned supports are provided"
          ></Radio>
          <Radio
            name="type"
            label="5 - all of the mentioned supports are provided"
          ></Radio>
          <Typography className="text-left text-2xl font-bold">
            OUTPUT
          </Typography>
          <Typography>
            1.Faculty members have research output 1. Research Journal
            publication
          </Typography>
          <Radio
            name="type"
            label="1 - The institution has an on-going research journal."
          ></Radio>
          <Radio
            name="type"
            label="2- The institution has a research journal but was not
published."
          ></Radio>
          <Radio
            name="type"
            label="3 - The institution has published one (1) or more research
journal in one academic year."
          ></Radio>
          <Radio
            name="type"
            label="4 - The institution has published two (2) research journals in
one academic year."
          ></Radio>
          <Radio
            name="type"
            label="5- The institution has published two (2) or more research
journal in one academic year."
          ></Radio>
          <Typography>
            2.There are faculty members who published books or instructional
            material/s.
          </Typography>
          <Radio name="type" label="1" />
          <Radio name="type" label="2" />
          <Radio name="type" label="3" />
          <Radio name="type" label="4" />
          <Radio name="type" label="5" />
          <Typography className="text-left text-2xl font-bold">
            Comments
          </Typography>
          <Input label="Best Practices"></Input>
        </Card>
      </div>
    </>
  );
}
