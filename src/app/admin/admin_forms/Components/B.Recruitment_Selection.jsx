import React from "react";
import { Card, Typography, Input, Radio } from "@material-tailwind/react";

export default function Recruitment_Selection() {
  return (
    <>
      <div className="mt-10"></div>
      <div>
        <Card className="w-[1500px] h-full px-10 py-10">
          <h1 className="text-center text-2xl font-bold">
            RECRUITMENT AND SELECTION
          </h1>
          <Typography className="text-left text-2xl font-bold">
            INPUTS
          </Typography>
          <Typography>
            1.There are institutional policies on faculty selection as evidenced
            by the following documents: a. Qualification Standards b. Ranking
            and Promotion Plan c. Ranking instrument d. Personnel Selection
            Board e. Published Administrative Code, University/College Code/
            Manual of Regulations/ Faculty Manual, Flow Chart of HRMO
          </Typography>
          <Radio name="type" label="1 - one (1) of the evidence are present" />
          <Radio name="type" label="2 - two (2) of the evidences are present" />
          <Radio
            name="type"
            label="3 - three (3) of the evidences are present"
          />
          <Radio
            name="type"
            label="4 - four (4) of the evidences are present  "
          />
          <Radio name="type" label="5 - all of the evidences are present" />
          <Typography>
            2.The faculty selection board is composed of: 1. School Head or
            representative 2. Academic Head or representative 3. HR Officer 4.
            Faculty Representative 5. Dean or its equivalent
          </Typography>
          <Radio
            name="type"
            label="1 - participated by any one (1) of the mentioned officials"
          />
          <Radio
            name="type"
            label="2 - participated by any of the two(2) of the mentioned
officials"
          />
          <Radio
            name="type"
            label="3 - participated by any of the three(3) of the mentioned
officials"
          />
          <Radio
            name="type"
            label="4 - participated by any of the four (4) of the mentioned
officials"
          />
          <Radio
            name="type"
            label="5 - participated by all of the mentioned officials "
          />
          <Typography className="text-left text-2xl font-bold">
            PROCESSES
          </Typography>
          <Typography>
            1.The minimum requirements of the Civil Service Commission and the
            University criteria/standards are taken into consideration in the
            recruitment, selection and hiring of faculty members.
          </Typography>
          <Radio name="type" label="1"></Radio>
          <Radio name="type" label="2"></Radio>
          <Radio name="type" label="3"></Radio>
          <Radio name="type" label="4"></Radio>
          <Radio name="type" label="5"></Radio>
          <Typography>
            2.The faculty selection process gives due consideration on the
            following: a. Academic qualification ( Education) b. Professional
            Licensure/Eligibility c. Teaching Experience d. Trainings and
            Seminars e. Professional Experience f. Teaching Competencies g. Oral
            and written communication h. Research capability i. Community
            Extension Activities j. Technical competencies, if applicable k.
            Character l. Personality m. Health
          </Typography>
          <Radio name="type" label="1"></Radio>
          <Radio name="type" label="2"></Radio>
          <Radio name="type" label="3"></Radio>
          <Radio name="type" label="4"></Radio>
          <Radio name="type" label="5"></Radio>
          <Typography>
            3.The Local Chief Executive appoints all employees of the
            institution.
          </Typography>
          <Radio name="type" label="1"></Radio>
          <Radio name="type" label="2"></Radio>
          <Radio name="type" label="3"></Radio>
          <Radio name="type" label="4"></Radio>
          <Radio name="type" label="5"></Radio>
          <Typography>
            4.The institution observes the criteria for recruitment, selection,
            and hiring.
          </Typography>
          <Radio name="type" label="1"></Radio>
          <Radio name="type" label="2"></Radio>
          <Radio name="type" label="3"></Radio>
          <Radio name="type" label="4"></Radio>
          <Radio name="type" label="5"></Radio>
          <Typography>
            5.The institution implements employment policies.
          </Typography>
          <Radio name="type" label="1"></Radio>
          <Radio name="type" label="2"></Radio>
          <Radio name="type" label="3"></Radio>
          <Radio name="type" label="4"></Radio>
          <Radio name="type" label="5"></Radio>
          <Typography className="text-left text-2xl font-bold">
            OUTPUT
          </Typography>
          <Typography>1.Presence of highly qualified applicants.</Typography>
          <Radio name="type" label="1"></Radio>
          <Radio name="type" label="2"></Radio>
          <Radio name="type" label="3"></Radio>
          <Radio name="type" label="4"></Radio>
          <Radio name="type" label="5"></Radio>
          <Typography>2.Presence of functional faculty researchers.</Typography>
          <Radio name="type" label="1"></Radio>
          <Radio name="type" label="2"></Radio>
          <Radio name="type" label="3"></Radio>
          <Radio name="type" label="4"></Radio>
          <Radio name="type" label="5"></Radio>
          <Typography>3.Competent faculty members were employed.</Typography>
          <Radio name="type" label="1"></Radio>
          <Radio name="type" label="2"></Radio>
          <Radio name="type" label="3"></Radio>
          <Radio name="type" label="4"></Radio>
          <Radio name="type" label="5"></Radio>
          <Typography>
            4.Existence of Selection and Recruitment Policy.
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
