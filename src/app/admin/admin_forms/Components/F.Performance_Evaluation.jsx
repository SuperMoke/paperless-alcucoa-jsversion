import React from "react";
import { Radio, Card, Typography, Input } from "@material-tailwind/react";

export default function Performance_Evaluation() {
  return (
    <>
      <div className="mt-10"></div>
      <div>
        <Card className="w-[1500px] h-full px-10 py-10">
          <h1 className="text-center text-2xl font-bold">
            PERFORMANCE EVALUATION
          </h1>
          <Typography className="text-left text-2xl font-bold">
            INPUTS
          </Typography>
          <Typography>
            1.The institution has a system that: 1.1. Monitors submission of
            academic requirements such as syllabi, grades and the like 1.2.
            Monitors faculty participation in trainings, meetings and other
            institutional activities/ services
          </Typography>
          <Radio name="type" label="1" />
          <Radio name="type" label="2" />
          <Radio name="type" label="3" />
          <Radio name="type" label="4" />
          <Radio name="type" label="5" />
          <Typography>
            2.There is provision for faculty evaluation by the students, peers,
            self and immediate superiors
          </Typography>
          <Radio name="type" label="1" />
          <Radio name="type" label="2" />
          <Radio name="type" label="3" />
          <Radio name="type" label="4" />
          <Radio name="type" label="5" />
          <Typography>
            3.There are professional involvement and training of faculty as
            evidenced by the following: a. Affiliation to professional
            organizations; b. Conduct of seminars and trainings; c.
            Participation in civic organizations; and d. Participation as
            Presenter/ Lecturer/ Facilitator/ Panelist/ Evaluator.
          </Typography>
          <Radio
            name="type"
            label="1 - No evidence of professional involvement and trainings"
          />
          <Radio
            name="type"
            label="2 - One (1) of the evidences mentioned is present."
          />
          <Radio
            name="type"
            label="3 - Two (2) of the evidences mentioned are present."
          />
          <Radio
            name="type"
            label="4 - Three (3) of the evidences mentioned are present."
          />
          <Radio
            name="type"
            label="5 - All of the evidences mentioned are present."
          />
          <Typography className="text-left text-2xl font-bold">
            PROCESSES
          </Typography>
          <Typography>
            1.The institution regularly conducts performance evaluation of
            faculty members using standardized instrument duly understood by the
            faculty that includes teaching competencies, research and community
            involvement.
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
            1.Attitudes and values of the faculty members are demonstrated in
            the following: a. Strict adherence to policies, rules and
            regulations and protocol; b. Punctuality; c. Courtesy; d.
            Participation to school activities/ meetings; and e. Initiative in
            organizing programs and projects.
          </Typography>
          <Radio
            name="type"
            label="1 - One (1) of the items mentioned is demonstrated."
          ></Radio>
          <Radio
            name="type"
            label="2 - Two (2) of the items mentioned are demonstrated."
          ></Radio>
          <Radio
            name="type"
            label="3 - Three (3) of the items mentioned are demonstrated."
          ></Radio>
          <Radio
            name="type"
            label="4 - Four (4) of the items mentioned are demonstrated."
          ></Radio>
          <Radio
            name="type"
            label="5 - All of the items mentioned are demonstrated."
          ></Radio>
          <Typography>
            2.Compliance with administrative requirements are evident in the
            following submissions: a. Submission of syllabi; b. Table of
            specifications; c. Test questions with answer key; d. Monthly
            attendance of students before the specified date of submission; and
            e. Grades and other academic reports.
          </Typography>
          <Radio
            name="type"
            label="1 - One (1) of the items mentioned is complied. "
          />
          <Radio
            name="type"
            label="2 - Two (2) of the items mentioned are complied."
          />
          <Radio
            name="type"
            label="3 - Three (3) of the items mentioned are complied."
          />
          <Radio
            name="type"
            label="4 - Four (4) of the items mentioned are complied."
          />
          <Radio
            name="type"
            label="5 - All of the items mentioned are complied"
          />
          <Typography>
            2.The teachers instructional materials and references are: Page | 44
            a. updated; b. well-researched materials; c. variety of sources; d.
            innovative resources; and e. supplementary materials.
          </Typography>
          <Radio
            name="type"
            label="1 - One (1) of the criteria mentioned is observed. "
          />
          <Radio
            name="type"
            label="2 - Two (3) of the criteria mentioned are observed."
          />
          <Radio
            name="type"
            label="3 - Three (3) of the criteria mentioned are observed."
          />
          <Radio
            name="type"
            label="4 - Four (4) of the criteria mentioned are observed."
          />
          <Radio
            name="type"
            label="5 - All of the criteria mentioned are observed."
          />
          <Typography>
            3.Mastery of the subject matter as evidenced by the following: a.
            There is a wide range of knowledge of the topic; b. Information
            related to the topic are updated; c. References are complete; and d.
            High degree of fluency originality and confidence are demonstrated.
          </Typography>
          <Radio
            name="type"
            label="1 - No evidence of mastery of the subject matter is
observed. "
          />
          <Radio
            name="type"
            label="2 -One (1) of the evidences mentioned is observed."
          />
          <Radio
            name="type"
            label="3- Two (2) of the evidences mentioned are observed."
          />
          <Radio
            name="type"
            label="4 -Three (3) of the evidences mentioned are observed."
          />
          <Radio
            name="type"
            label="5 -All of the evidences mentioned are observed."
          />
          <Typography>
            4.Class Preparation as evidenced in the following: a. Personality
            and physical appearance; b. Punctuality and attendance; c.
            Possession of tools and supplies; and d. Use of appropriate
            instructional materials/technology needed and basic knowledge on
            their use.
          </Typography>
          <Radio
            name="type"
            label="1 - There is no evidence of class preparation on the part of
the teacher."
          />
          <Radio
            name="type"
            label="2 - One (1) of the evidence mentioned is observed."
          />
          <Radio
            name="type"
            label="3 - Two (2) of the evidences mentioned are observed."
          />
          <Radio
            name="type"
            label="4 - Three (3) of the evidences mentioned are observed."
          />
          <Radio
            name="type"
            label="5 - All of the evidences mentioned are observed."
          />
          <Typography>
            5.Teaching competence can be seen in: Accomplishment of program and
            course objectives as indicated in the syllabi with expected student
            outcome/s.
          </Typography>
          <Radio
            name="type"
            label="1 – Program and course objectives specified in the syllabi
are not met and inconsistent."
          />
          <Radio
            name="type"
            label="2 – Program and course objective are met but inconsistent
with the syllabi."
          />
          <Radio
            name="type"
            label="3 – Program and course objectives are met and show
minimal consistency with the syllabi"
          />
          <Radio
            name="type"
            label="4 - Accomplishment of program and course objective is
exceeded and consistent with the syllabi as shown by:
a. Objectives appropriately focus on content
b. Objectives focus on disciplinary skill and
development
c. Course activities are part of the class and aligned to
achieve course objectives"
          />
          <Radio
            name="type"
            label="5 - Accomplishment of program and course objective is far
exceeded, and consistent with the syllabi as shown by:
a. Creation of multiple opportunities for students to
interact and share ideas
b. Objectives, learning activities and assessments are
aligned and support each other
c. Objectives of learning outcomes were the central
element of the presentation and discussion
d. Designed elements are appropriately adopted to the
course level, size and position within the curriculum
and characteristics of students in the class"
          />
          <Typography>6.Academic requirements submitted.</Typography>
          <Radio
            name="type"
            label="1- Below 25% of the faculty members submits academic
requirements on time"
          />
          <Radio
            name="type"
            label="2- 25% of the faculty members submits academic
requirements on time"
          />
          <Radio
            name="type"
            label="3- 50% of the faculty members submits academic
requirements on time"
          />
          <Radio
            name="type"
            label="4- 75% of the faculty members submits academic
requirements on time"
          />
          <Radio
            name="type"
            label="5- 100% of the faculty members submits academic
requirement on time"
          />
          <Typography>
            7.Participated in trainings, seminars, meeting and other
            institutional activities or services.
          </Typography>
          <Radio
            name="type"
            label="1- Below 25% of the faculty members participated"
          />
          <Radio
            name="type"
            label="2- 25% of the faculty members participated"
          />
          <Radio
            name="type"
            label="3- 50% of the faculty members participated"
          />
          <Radio
            name="type"
            label="4- 75% of the faculty members participated"
          />
          <Radio
            name="type"
            label="5- 100% of the faculty members participated"
          />
          <Typography>
            8.Demonstrate excellent instructional competence as shown by: a.
            submission of academic requirements such as syllabi, grades and the
            like. b. attendance in training, seminar and meeting obtained. c.
            faculty members obtained at least very satisfactory (VS) performance
            rating or higher. d. no derogatory records as evidenced by pending
            or decided cases.
          </Typography>
          <Radio
            name="type"
            label="1- Below 25% demonstrated excellent instructional
competence"
          />
          <Radio
            name="type"
            label="2- 25% demonstrated excellent instructional competence"
          />
          <Radio
            name="type"
            label="3- 50% demonstrated excellent instructional competence"
          />
          <Radio
            name="type"
            label="4- 75% demonstrated excellent instructional competence"
          />
          <Radio
            name="type"
            label="5- 100% demonstrated excellent instructional competence"
          />

          <Typography className="text-left text-2xl font-bold">
            Comments
          </Typography>
          <Input label="Best Practices"></Input>
        </Card>
      </div>
    </>
  );
}
