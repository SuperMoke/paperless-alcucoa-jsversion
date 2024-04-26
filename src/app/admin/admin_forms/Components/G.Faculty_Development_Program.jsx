import React from "react";
import { Card, Typography, Radio, Input } from "@material-tailwind/react";

export default function Faculty_Development_Program() {
  return (
    <>
      <div className="mt-10"></div>
      <div>
        <Card className="w-[1500px] h-full px-10 py-10">
          <h1 className="text-center text-2xl font-bold">
            FACULTY DEVELOPMENT PROGRAM
          </h1>
          <Typography className="text-left text-2xl font-bold">
            INPUTS
          </Typography>
          <Typography>
            1.The institution has Faculty Development Program as shown by the
            following: a. budget; b. trainings and seminars; c. financial
            assistance; d. honorarium; e. scholarships; f. service credits; g.
            leave credits; and h. career advancement/ promotion.
          </Typography>
          <Radio
            name="type"
            label="1 - One (1) of the items mentioned is present"
          />
          <Radio
            name="type"
            label="2 - Two (2) of the items mentioned are present"
          />
          <Radio
            name="type"
            label="3 - Four (4) of the items mentioned are present"
          />
          <Radio
            name="type"
            label="4 - Six (6) of the items mentioned are present"
          />
          <Radio name="type" label="5 - All items mentioned are present" />
          <Typography>
            2. There is an orientation/ reorientation program for all faculty
            which includes the institution’s mission statements and its
            philosophy, institutional strategies and policies.
          </Typography>
          <Radio
            name="type"
            label="1 - the institution does not conduct orientation/ reorientation
program "
          />
          <Radio
            name="type"
            label="2 - the institution conducts orientation/ reorientation
program as the need arises"
          />
          <Radio
            name="type"
            label="3 - the institution conducts orientation/ reorientation
program every other year"
          />
          <Radio
            name="type"
            label="4 - the institution conducts orientation/ reorientation
program once a year"
          />
          <Radio
            name="type"
            label="5 – the institution conducts orientation/ reorientation
program every semester"
          />
          <Typography>
            3.The institution has a specialized in-service training for faculty
            members in the form of: a. seminars; b. workshops; and c.
            educational tour/ benchmarking and the like.
          </Typography>
          <Radio
            name="type"
            label="1 – One or two (1or 2 ) of the items mentioned are present
and conducted once a year"
          />
          <Radio
            name="type"
            label="2 – All of the items mentioned are present and conducted
once a year"
          />
          <Radio
            name="type"
            label="3 – One (1) of the items mentioned is present and
conducted every semester"
          />
          <Radio
            name="type"
            label="4 – Two (2) of the items mentioned above are present and
conducted every semester"
          />
          <Radio
            name="type"
            label="5 – All of the items mentioned are present and conducted
every semester"
          />
          <Typography>
            4.There are formal study opportunities for faculty member
          </Typography>
          <Radio name="type" label="1" />
          <Radio name="type" label="2" />
          <Radio name="type" label="3" />
          <Radio name="type" label="4" />
          <Radio name="type" label="5" />
          <Typography>
            5.There is membership in professional organizations
          </Typography>
          <Radio name="type" label="1" />
          <Radio name="type" label="2" />
          <Radio name="type" label="3" />
          <Radio name="type" label="4" />
          <Radio name="type" label="5" />
          <Typography>
            6.The institution has financial support for faculty development
            program outside the school.
          </Typography>
          <Radio
            name="type"
            label="1 - The institution grants 20% financial support"
          />
          <Radio
            name="type"
            label="2 - The institution grants 40% financial support"
          />
          <Radio
            name="type"
            label="3 - The institution grants 60% financial support"
          />
          <Radio
            name="type"
            label="4 - The institution grants 80% financial support"
          />
          <Radio
            name="type"
            label="5 - The institution grants 100% financial support"
          />
          <Typography>
            7.There are opportunities available to the full-time faculty in the
            graduate and post graduate programs as follows: 7.1 scholarships/
            grants and fellowship 7.2 research 7.3 seminars and training.
          </Typography>
          <Radio name="type" label="1" />
          <Radio name="type" label="2" />
          <Radio name="type" label="3" />
          <Radio name="type" label="4" />
          <Radio name="type" label="5" />
          <Typography>
            There are faculty and committee meetings such as: a. Institutional
            meeting b. College meeting c. Department meeting d. Committee /
            Project meeting
          </Typography>
          <Radio name="type" label="1 – No meetings conducted" />
          <Radio
            name="type"
            label="2 – One (1) of the mentioned meetings is conducted"
          />
          <Radio
            name="type"
            label="3 – Two (2) of the mentioned meetings are conducted"
          />
          <Radio
            name="type"
            label="4 – Three (3) of the mentioned meetings are conducted"
          />
          <Radio
            name="type"
            label="5 – All of the mentioned meetings are conducted"
          />
          <Typography className="text-left text-2xl font-bold">
            PROCESSES
          </Typography>
          <Typography>
            1.The institution proposes a budget for Faculty Development Program.
          </Typography>
          <Radio name="type" label="1"></Radio>
          <Radio name="type" label="2"></Radio>
          <Radio name="type" label="3"></Radio>
          <Radio name="type" label="4"></Radio>
          <Radio name="type" label="5"></Radio>
          <Typography>
            2.The institution solicits the approval of the Faculty Development
            Program.
          </Typography>
          <Radio name="type" label="1"></Radio>
          <Radio name="type" label="2"></Radio>
          <Radio name="type" label="3"></Radio>
          <Radio name="type" label="4"></Radio>
          <Radio name="type" label="5"></Radio>
          <Typography>
            3.The institution monitors the faculty meeting and attendance of
            faculty in meetings, seminars and other training program.
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
            1.The budget for Faculty Development Programs was implemented.
          </Typography>
          <Radio
            name="type"
            label="1 - The institution strictly implements 20% of the budgeted
faculty development program"
          ></Radio>
          <Radio
            name="type"
            label="2 - The institution strictly implements 40% of the budgeted
faculty development program"
          ></Radio>
          <Radio
            name="type"
            label="3 - The institution strictly implements 60% of the budgeted
faculty development program"
          ></Radio>
          <Radio
            name="type"
            label="4 -The institution strictly implements 80% of the budgeted
faculty development program"
          ></Radio>
          <Radio
            name="type"
            label="5 - The institution strictly implements 100% of the
budgeted faculty development program"
          ></Radio>
          <Typography>2.Meetings regularly held.</Typography>
          <Radio name="type" label="1"></Radio>
          <Radio name="type" label="2"></Radio>
          <Radio name="type" label="3"></Radio>
          <Radio name="type" label="4"></Radio>
          <Radio name="type" label="5"></Radio>
          <Typography>3.In service training regularly conducted.</Typography>
          <Radio name="type" label="1"></Radio>
          <Radio name="type" label="2"></Radio>
          <Radio name="type" label="3"></Radio>
          <Radio name="type" label="4"></Radio>
          <Radio name="type" label="5"></Radio>
          <Typography>4.Faculty Scholarships.</Typography>
          <Radio
            name="type"
            label="1 – 1% of the regular faculty members are granted study
opportunities as shown by scholarship in the graduate
and post-graduate programs through the different
sponsoring agencies such as CHED, DOST, CSC and
others."
          ></Radio>
          <Radio
            name="type"
            label="2 – 2% of the regular faculty members are granted study
opportunities as shown by scholarship in the graduate
and post-graduate programs through the different
sponsoring agencies such as CHED, DOST, CSC, and
others. "
          ></Radio>
          <Radio
            name="type"
            label="3 – 5% of the regular faculty members are granted study
opportunities as shown by scholarship in the graduate
and post-graduate programs through the different
sponsoring agencies such as CHED, DOST, CSC, and
others. "
          ></Radio>
          <Radio
            name="type"
            label="4 – 8% of the regular faculty members are granted study
opportunities as shown by scholarship in the graduate
and post-graduate programs through the different
sponsoring agencies such as CHED, DOST, CSC, and
others. "
          ></Radio>
          <Radio
            name="type"
            label="5 – 10% of the regular faculty members are granted study
opportunities as shown by scholarship in the graduate
and post-graduate programs through the different
sponsoring agencies such as CHED, DOST, CSC, and
others."
          ></Radio>
          <Typography>
            5.Updated membership in professional organization.
          </Typography>
          <Radio
            name="type"
            label="1 – 20% of the faculty are members of professional
organizations as shown by their valid ID, certificates,
and/or official receipts"
          ></Radio>
          <Radio
            name="type"
            label="2 – 40% of the faculty are members of professional
organizations as shown by their valid ID, certificates,
and/or official receipts "
          ></Radio>
          <Radio
            name="type"
            label="3 – 60% of the faculty are members of professional
organizations as shown by their valid ID, certificates,
and/or official receipts "
          ></Radio>
          <Radio
            name="type"
            label="4 – 80% of the faculty are members of professional
organizations as shown by their valid ID, certificates,
and/or official receipts "
          ></Radio>
          <Radio
            name="type"
            label="5 – 100% of the faculty are members of professional
organizations as shown by their valid ID, certificates,
and/or official receipts "
          ></Radio>
          <Typography className="text-left text-2xl font-bold">
            Comments
          </Typography>
          <Input label="Best Practices"></Input>
        </Card>
      </div>
    </>
  );
}
