import React from "react";
import { Card, Input, Typography, Radio } from "@material-tailwind/react";

export default function Salaries_And_Fringe_Benefits() {
  return (
    <>
      <div className="mt-10"></div>
      <div>
        <Card className="w-[1500px] h-full px-10 py-10">
          <h1 className="text-center text-2xl font-bold">
            SALARIES AND FRINGE BENEFITS
          </h1>
          <Typography className="text-left text-2xl font-bold">
            INPUTS
          </Typography>
          <Typography>
            1.Faculty members receive their salaries regularly.
          </Typography>
          <Radio
            name="type"
            label="1 - All faculty members receive their salaries 4 or more
days after the payday"
          />
          <Radio
            name="type"
            label="2 - All faculty members receive their salaries 3 days after
the payday"
          />
          <Radio
            name="type"
            label="3 - All faculty members receive their salaries 2 days after
the payday"
          />
          <Radio
            name="type"
            label="4 - All faculty members receive their salaries 1 day after the
payday"
          />
          <Radio
            name="type"
            label="5 - All faculty members receive their salaries on time"
          />
          <Typography>
            2.There is an existence of policy on salary and other fringe
            benefits duly approved by the BOR and is consistent with the
            Department of Budget and Civil Service Rules related to the
            following: a. Vacation pay; b. Salary adjustment/increment; c.
            Honorarium; d. Productivity incentive allowance; e. Overtime pay;
            and f. Clothing allowance/ other related allowances.
          </Typography>
          <Radio
            name="type"
            label="1 – Existence of One (1) of the benefits mentioned"
          />
          <Radio
            name="type"
            label="2 – Existence of Two (2) of the benefits mentioned"
          />
          <Radio
            name="type"
            label="3 – Existence of three (3) of the benefits mentioned "
          />
          <Radio
            name="type"
            label="4 – Existence of four (4) of the benefits mentioned "
          />
          <Radio
            name="type"
            label="5 – Existence of all of the benefits mentioned above "
          />
          <Typography>
            3.The institution has policies for leaves in accordance with the
            Civil Service Rules such as: a. Vacation Leave; b. Study Leave; c.
            Sabbatical; d. Service Leave; e. Sick Leave; and f. Other special
            leave privileges like funeral/ mourning leave, graduation leave,
            enrolment leave, wedding/ anniversary leave, birthday leave,
            hospitalization leave, relocation leave for a maximum of 3 days
            within a calendar year.
          </Typography>
          <Radio
            name="type"
            label="1 - One/ Two (1 or 2) of the policies mentioned is/are
provided "
          />
          <Radio
            name="type"
            label="2 - Three (3) of the policies mentioned are provided"
          />
          <Radio
            name="type"
            label="3 - Four (4) of the policies mentioned are provided"
          />
          <Radio
            name="type"
            label="4 - Five (5) of the policies mentioned are provided"
          />
          <Radio
            name="type"
            label="5 - All of the policies mentioned are provided"
          />
          <Typography>
            4.The institution has provisions for the following: a. Retirement
            program; b. Terminal leave; c. Monetization of leave credits; and d.
            Cash surrender value.
          </Typography>
          <Radio
            name="type"
            label="1 - None of the items mentioned is provided"
          />
          <Radio
            name="type"
            label="2 - One (1) of the items mentioned is provided"
          />
          <Radio
            name="type"
            label="3 - Two (2) of the items mentioned are provided"
          />
          <Radio
            name="type"
            label="4 - Three (3) of the items mentioned are provided "
          />
          <Radio name="type" label="5 - All the items mentioned are provided" />
          <Typography>
            5.The faculty enjoy the other mandatory benefits such as: a. Medical
            benefits ; b. Loan and housing under PAG-IBIG; c. Loan and Housing
            under GSIS; and d. City and institutional benefit..
          </Typography>
          <Radio
            name="type"
            label="1 - None of the items mentioned is provided"
          />
          <Radio
            name="type"
            label="2 - One (1) of the items mentioned is provided"
          />
          <Radio
            name="type"
            label="3 - Two (2) of the items mentioned are provided"
          />
          <Radio
            name="type"
            label="4 - Three (3) of the items mentioned are provided "
          />
          <Radio name="type" label="5 - All the items mentioned are provided" />
          <Typography className="text-left text-2xl font-bold">
            PROCESSES
          </Typography>
          <Typography>
            1.The institution set up a system for leave administration like
            ledger and leave form.
          </Typography>
          <Radio name="type" label="1"></Radio>
          <Radio name="type" label="2"></Radio>
          <Radio name="type" label="3"></Radio>
          <Radio name="type" label="4"></Radio>
          <Radio name="type" label="5"></Radio>
          <Typography>2.The institution audits leave credit.</Typography>
          <Radio name="type" label="1"></Radio>
          <Radio name="type" label="2"></Radio>
          <Radio name="type" label="3"></Radio>
          <Radio name="type" label="4"></Radio>
          <Radio name="type" label="5"></Radio>
          <Typography>
            3.The institution facilitates mandatory and fringe benefits within
            the prescribed period.
          </Typography>
          <Radio name="type" label="1"></Radio>
          <Radio name="type" label="2"></Radio>
          <Radio name="type" label="3"></Radio>
          <Radio name="type" label="4"></Radio>
          <Radio name="type" label="5"></Radio>
          <Typography>
            4.The institution facilitates the payroll on time.
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
            1.Facilitated payroll, mandatory benefit and different fringe
            benefit on time.
          </Typography>
          <Radio name="type" label="1"></Radio>
          <Radio name="type" label="2"></Radio>
          <Radio name="type" label="3"></Radio>
          <Radio name="type" label="4"></Radio>
          <Radio name="type" label="5"></Radio>
          <Typography>
            2.System of leave administration is formulated and implemented.
          </Typography>
          <Radio name="type" label="1"></Radio>
          <Radio name="type" label="2"></Radio>
          <Radio name="type" label="3"></Radio>
          <Radio name="type" label="4"></Radio>
          <Radio name="type" label="5"></Radio>
          <Typography>3.Conducted regular audit of leave credits.</Typography>
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
