import React from "react";
import { Card, Typography, Input, Radio } from "@material-tailwind/react";

export default function Ranking_Promotion() {
  return (
    <>
      <div className="mt-10"></div>
      <div>
        <Card className="w-[1500px] h-full px-10 py-10">
          <h1 className="text-center text-2xl font-bold">
            RANKING AND PROMOTION
          </h1>
          <Typography className="text-left text-2xl font-bold">
            INPUTS
          </Typography>
          <Typography>
            1.There is a faculty ranking and promotion system used by the
            institution.
          </Typography>
          <Radio name="type" label="1" />
          <Radio name="type" label="2" />
          <Radio name="type" label="3" />
          <Radio name="type" label="4" />
          <Radio name="type" label="5" />
          <Typography>
            2.There is a career pathing and succession plan for the faculty
          </Typography>
          <Radio name="type" label="1" />
          <Radio name="type" label="2" />
          <Radio name="type" label="3" />
          <Radio name="type" label="4" />
          <Radio name="type" label="5" />
          <Typography>
            3.The length of the probationary period is in accordance to Civil
            Service Commission standards
          </Typography>
          <Radio name="type" label="1 - CSC standards not implemented" />
          <Radio
            name="type"
            label="2 - CSC standards are partially implemented"
          />
          <Radio
            name="type"
            label="3 - CSC standards are moderately implemented "
          />
          <Radio name="type" label="4 - CSC standards are mostly implemented" />
          <Radio
            name="type"
            label="5 - CSC standards are strictly implemented"
          />
          <Typography>
            4.There are procedures for the termination of employment. As
            indicated in the Administrative Code, Faculty Manual and other
            supporting details
          </Typography>
          <Radio
            name="type"
            label="1 - The institution does not observe and implement no
functional procedures for the termination of
employment."
          />
          <Radio
            name="type"
            label="2 - The institution partially observes and implements
functional procedures for the termination of
employment."
          />
          <Radio
            name="type"
            label="3 -The institution moderately observes and implements
functional procedures for the termination of
employment."
          />
          <Radio
            name="type"
            label="4 - The institution mostly observes and implements
functional procedures for the termination of
employment."
          />
          <Radio
            name="type"
            label="5 – The institution strictly observes and implements
functional procedures for the termination of
employment."
          />
          <Typography>
            5.There are procedures for the dismissal of faculty including due
            process.
          </Typography>
          <Radio
            name="type"
            label="1 - The institution does not observe and implement
functional procedures for dismissal of faculty including due
process"
          />
          <Radio
            name="type"
            label="2 - The institution partially observes and implements
functional procedures for dismissal of faculty including due
process."
          />
          <Radio
            name="type"
            label="3 - The institution moderately observes and implements
functional procedures for the dismissal of faculty including
due process."
          />
          <Radio
            name="type"
            label="4 - The institution mostly observes and implements
functional procedures for the dismissal of faculty including
due process."
          />
          <Radio
            name="type"
            label="5 - The institution strictly observes and implements
functional procedures for the dismissal of faculty including
due process."
          />
          <Typography className="text-left text-2xl font-bold">
            PROCESSES
          </Typography>
          <Typography>
            1.Institutionalization of the following: a. Merit, Ranking and
            Promotion Plan b. Career Pathing Plan c. Succession Plan
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
            1.List of promoted and regularized faculty members.
          </Typography>
          <Radio name="type" label="1"></Radio>
          <Radio name="type" label="2"></Radio>
          <Radio name="type" label="3"></Radio>
          <Radio name="type" label="4"></Radio>
          <Radio name="type" label="5"></Radio>
          <Typography>2.Due process observed.</Typography>
          <Radio name="type" label="1"></Radio>
          <Radio name="type" label="2"></Radio>
          <Radio name="type" label="3"></Radio>
          <Radio name="type" label="4"></Radio>
          <Radio name="type" label="5"></Radio>
          <Typography>3.Low rate of faculty turnover.</Typography>
          <Radio name="type" label="1"></Radio>
          <Radio name="type" label="2"></Radio>
          <Radio name="type" label="3"></Radio>
          <Radio name="type" label="4"></Radio>
          <Radio name="type" label="5"></Radio>
          <Typography>4.Career Pathing and Succession Plan.</Typography>
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
