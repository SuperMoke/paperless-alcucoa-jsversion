import React from "react";
import { Card, Input, Typography, Radio } from "@material-tailwind/react";

export default function Faculty_Relationships() {
  return (
    <>
      <div className="mt-10"></div>
      <div>
        <Card className="w-[1500px] h-full px-10 py-10">
          <h1 className="text-center text-2xl font-bold">
            FACULTY RELATIONSHIPS
          </h1>
          <Typography className="text-left text-2xl font-bold">
            INPUTS
          </Typography>
          <Typography>
            1.There is a faculty association that provides for the personal and
            professional growth of its members, and promotes faculty welfare
            through the following activities/programs: a. sports and wellness
            activities b. scholarship c. sponsorship d. financial rewards for
            exemplary/commendable performances e. financial aid in case of
            wedding, retirement, sickness, disability, death f. team building
            activity g. spiritual activity h. special day celebration ( Family
            day, Teachers day)
          </Typography>
          <Radio
            name="type"
            label="1 – One (1) of the items mentioned is provided"
          />
          <Radio
            name="type"
            label="2 - Two (2) of the items mentioned is provided"
          />
          <Radio
            name="type"
            label="3 - Four (4) of the items mentioned is provided"
          />
          <Radio
            name="type"
            label="4 - Six (6) of the items mentioned is provided"
          />
          <Radio name="type" label="5 - All items mentioned are provided" />
          <Typography>
            2. There is good faculty relationship with the administration as
            evidenced in the following practices: a. involvement of the faculty
            in the formulation/revision of the institution’s purposes and
            objectives b. involvement in the academic and administrative
            policymaking c. practice of principle of academic freedom d.
            dialogue and open communication between the faculty and
            administration e. involvement of the faculty in the grievance
            committee.
          </Typography>
          <Radio
            name="type"
            label="1 - One (1) of the mentioned items is practiced "
          />
          <Radio
            name="type"
            label="2 - Two (2) of the mentioned items are practiced "
          />
          <Radio
            name="type"
            label="3 - Three (3) of the mentioned items are practiced"
          />
          <Radio
            name="type"
            label="4 - Four (4) of the mentioned items are practiced"
          />
          <Radio
            name="type"
            label="5 - All of the mentioned items are practiced"
          />
          <Typography>
            3.There is faculty- students relationship as evidenced in the
            following a. Faculty members are responsive to students’ needs. b.
            Faculty members are available for academic advising and
            consultations. c. Faculty members participate in
            co-curricular/extracurricular activities. d. Faculty members respond
            positively to grievances expressed by students. e. Faculty members
            are accessible to students.
          </Typography>
          <Radio
            name="type"
            label="1 - One (1) of the mentioned items is evident"
          />
          <Radio
            name="type"
            label="2 - Two (2) of the mentioned items are evident"
          />
          <Radio
            name="type"
            label="3 - Three (3) of the mentioned items are evident"
          />
          <Radio
            name="type"
            label="4 - Four (4) of the mentioned items are evident"
          />
          <Radio
            name="type"
            label="5 - All of the mentioned items are evident"
          />
          <Typography>
            4.There is relationship with other sectors as evidenced in the
            following: a. Faculty members have healthy relationships with the
            non-academic personnel. b. Faculty members actively participate in
            school projects and services.
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
            1.The institution supports Faculty Association programs and
            activities.
          </Typography>
          <Radio name="type" label="1"></Radio>
          <Radio name="type" label="2"></Radio>
          <Radio name="type" label="3"></Radio>
          <Radio name="type" label="4"></Radio>
          <Radio name="type" label="5"></Radio>
          <Typography>
            2.The institution provides opportunities for faculty to have
            harmonious relationship with the administration, students and other
            stakeholders.
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
            1.Faculty Association activities and programs are conducted.
          </Typography>
          <Radio name="type" label="1"></Radio>
          <Radio name="type" label="2"></Radio>
          <Radio name="type" label="3"></Radio>
          <Radio name="type" label="4"></Radio>
          <Radio name="type" label="5"></Radio>
          <Typography>
            2.Faculty activities and program with the administration/ students/
            other stakeholders are conducted.
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
