import React from "react";
import { Card, Typography, Radio, Input } from "@material-tailwind/react";

export default function Academic_Qualification() {
  return (
    <>
      <div className="mt-10"></div>
      <div>
        <Card className="w-[1500px] h-full px-10 py-10">
          <h1 className="text-center text-2xl font-bold">
            ACADEMIC FACULTY QUALIFICATIONS AND TEACHING EXPERIENCES
          </h1>
          <Typography className="text-left text-2xl font-bold">
            INPUTS
          </Typography>
          <Typography>
            1.Faculty members teaching general education courses are master’s
            degree graduates.
          </Typography>
          <Radio
            name="type"
            label="1 - Less than 20% of the faculty members teaching general
education courses are Master’s degree holders"
          />
          <Radio
            name="type"
            label="2 - 40% of the faculty members teaching general education
courses are Master’s degree holders or 30% are
Master’s degree holders and 20% are finishing within
one (1) year."
          />
          <Radio
            name="type"
            label="3 - 60% of the faculty members teaching general education
courses are Master’s degree holders or 40% are
Master’s degree holders and 30% are finishing within
one (1) year."
          />
          <Radio
            name="type"
            label="4 - 80% of the faculty members teaching general
education courses are Master’s degree holders "
          />
          <Radio
            name="type"
            label="5 - 100% of the faculty members teaching general
education courses are Master’s degree holders"
          />
          <Typography>
            2.Faculty members who teach major courses possess appropriate
            graduate/post graduate degree qualifications.
          </Typography>
          <Radio
            name="type"
            label="1 - Lower than 20% of the faculty are MA degree holder,
with at least 1 relevant training and seminar"
          />
          <Radio
            name="type"
            label="2 - 40 % of the faculty are MA degree holder, with at least 1
relevant training and seminar"
          />
          <Radio
            name="type"
            label="3 - 60% MA degree holder, with at least 2 or more relevant
trainings and seminars"
          />
          <Radio
            name="type"
            label="4 - 80% possess appropriate graduate/postgraduate
degree qualifications. (MA or doctorate degree,
minimum two (2) years industry experience, with at least
2 or more relevant trainings and seminars annually)"
          />
          <Radio
            name="type"
            label="5 -100% possess appropriate graduate/postgraduate
degree qualifications.(MA or doctorate degree, minimum
two (2) years industry experience, with at least 2 or
more relevant trainings and seminars annually)"
          />
          <Typography>
            3.Faculty members possess extensive teaching experience and/or
            industry practice in their fields of specialization.
          </Typography>
          <Radio
            name="type"
            label="1 - Less than 30% of the faculty have 1 year teaching
experience/industry practice"
          ></Radio>
          <Radio
            name="type"
            label="2 - 40% with 2 years teaching experience/industry
practice"
          ></Radio>
          <Radio
            name="type"
            label="3 - 50% with 3 years teaching experience/industry
practice"
          ></Radio>
          <Radio
            name="type"
            label="4 - 60% with 4 years teaching experience/industry practice"
          ></Radio>
          <Radio
            name="type"
            label="5 - 70 % with a minimum of 5 years teaching
experience/industry practice"
          ></Radio>
          <Typography>
            4.Faculty members are affiliated with professional organizations in
            their fields of specialization.
          </Typography>
          <Radio
            name="type"
            label="1 - Lower than 60% of the faculty have no affiliation with
professional organizations"
          ></Radio>
          <Radio
            name="type"
            label="2 - 70% with of the faculty are affiliated with local
professional organizations"
          ></Radio>
          <Radio
            name="type"
            label="3 - 80% of the faculty are affiliated with regional
professional organizations"
          ></Radio>
          <Radio
            name="type"
            label="4 - 90% of the faculty are affiliated with international and/or
national professional organizations"
          ></Radio>
          <Radio
            name="type"
            label="5 - 100% of the faculty are affiliated with international
and/or national professional organizations"
          ></Radio>
          <Typography className="text-left text-2xl font-bold">
            PROCESSES
          </Typography>
          <Typography>
            1.Regular updating, monitoring and evaluation of faculty
            qualifications
          </Typography>
          <Radio name="type" label="1"></Radio>
          <Radio name="type" label="2"></Radio>
          <Radio name="type" label="3"></Radio>
          <Radio name="type" label="4"></Radio>
          <Radio name="type" label="5"></Radio>
          <Typography>
            2.Provision for Faculty Development Program: Scholarships,
            Trainings, Workshops, and Grants
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
            1.Faculty members demonstrate mastery of the subject matter and
            effective delivery of the learning competencies in their own field
            of expertise.
          </Typography>
          <Radio name="type" label="1"></Radio>
          <Radio name="type" label="2"></Radio>
          <Radio name="type" label="3"></Radio>
          <Radio name="type" label="4"></Radio>
          <Radio name="type" label="5"></Radio>
          <Typography>
            2.Faculty members are members or leaders of recognized professional
            organizations here and abroad.
          </Typography>
          <Radio name="type" label="1"></Radio>
          <Radio name="type" label="2"></Radio>
          <Radio name="type" label="3"></Radio>
          <Radio name="type" label="4"></Radio>
          <Radio name="type" label="5"></Radio>
          <Typography>
            3.The institution is able to comply with CHED’s requirements, ASEAN
            requirements, and other international standards on faculty
            qualifications
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
