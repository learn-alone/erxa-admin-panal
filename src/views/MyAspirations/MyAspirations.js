import React, { useRef } from "react";
import Accordion from "../../components/Accordion/Accordion.js";
import "./MyAspirations.css";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useReactToPrint } from "react-to-print";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { AccordionDetails } from "@material-ui/core";

class ComponentToPrint extends React.PureComponent {
    render(){
  return (
    <div>

      <Accordion
        activeColor="rose"
        collapses={[
          {
            title: "1.Why Study Abroad ",
            content: <FirstAccordion />,
          },
        ]}
      />

      <Accordion
        activeColor="rose"
        collapses={[
          {
            title: "2. Countries you wish to study?",
            content: <SecondAccordion />,
          },
        ]}
      />

      <Accordion
        activeColor="rose"
        collapses={[
          {
            title: "3. Your preferred institution?",
            content: <ThirdAccordion />,
          },
        ]}
      />

      <Accordion
        activeColor="rose"
        collapses={[
          {
            title: "4. Intake Planned?",
            content: <FourthAccordion />,
          },
        ]}
      />

      <Accordion
        activeColor="rose"
        collapses={[
          {
            title: "5. Discipline you wish to enroll?",
            content: <FifthAccordion />,
          },
        ]}
      />

      <Accordion
        activeColor="rose"
        collapses={[
          {
            title: "6. Program you wish to study?",
            content: <SixthAccordion />,
          },
        ]}
      />

      <Accordion
        activeColor="rose"
        collapses={[
          {
            title: "7. Test Preparation",
            content: <SeventhAccordion />,
          },
        ]}
      />
      <Accordion
        activeColor="rose"
        collapses={[
          {
            title: "8. Primary Funding Source",
            content: <EighthAccordion />,
          },
        ]}
      />

      <Accordion
        activeColor="rose"
        collapses={[
          {
            title: "9. Preffered Accomodation",
            content: <NinthAccordion />,
          },
        ]}
      />

      <Accordion
        activeColor="rose"
        collapses={[
          {
            title: "10. Future Plans",
            content: <TenthAccordion />,
          },
        ]}
      />
    </div>
  );}
}

function Formprint() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <center> <Button
        onClick={handlePrint}
        variant="contained"
        color="primary"
        style={{ marginBottom: "20px" }}
      >
        Print
      </Button></center>
    </div>
  );
}

function FirstAccordion() {
  const [state, setState] = React.useState({
    one_a: true,
    one_b: true,
    one_c: true,
    one_d: true,
    one_e: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { one_a, one_b, one_c, one_d, one_e } = state;
  return (
    <div style={{ textAlign: "left", marginLeft: "150px" }}>
      <FormControlLabel
        disabled
        control={
          <Checkbox checked={one_a} onChange={handleChange} name="one_a" />
        }
        label="I want to study at an institution with an international reputation"
      />
      <br />
      <FormControlLabel
        disabled
        control={
          <Checkbox checked={one_b} onChange={handleChange} name="one_b" />
        }
        label="I think a foreign degree will provide an better job prospect"
      />
      <br />
      <FormControlLabel
        disabled
        control={
          <Checkbox checked={one_c} onChange={handleChange} name="one_c" />
        }
        label="I think my preffered course would be of a better quality abroad"
      />
      <br />
      <FormControlLabel
        disabled
        control={
          <Checkbox checked={one_d} onChange={handleChange} name="one_d" />
        }
        label="I want to get a better reaserch experience that I could get in my country"
      />
      <br />
      <FormControlLabel
        disabled
        control={
          <Checkbox checked={one_e} onChange={handleChange} name="one_e" />
        }
        label="I need a change in my life"
      />
    </div>
  );
}

function SecondAccordion() {
  const [state, setState] = React.useState({
    USA: false,
    CANADA: false,
    UK: false,
    AUSTRALIA: false,
    NEWZEALAND: false,
    JAPAN: false,
    GERMANY: false,
    POLAND: false,
    MALYSIA: false,
    SINGAPORE: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const {
    USA,
    CANADA,
    UK,
    AUSTRALIA,
    NEWZEALAND,
    JAPAN,
    GERMANY,
    POLAND,
    MALYSIA,
    SINGAPORE,
  } = state;
  return (
    <div style={{ textAlign: "left", marginLeft: "150px" }}>
      <table>
        <tr>
          <th>
            <FormControlLabel
              disabled
              control={
                <Checkbox checked={USA} onChange={handleChange} name="USA" />
              }
              label="USA"
            />
          </th>
          <th>
            <FormControlLabel
              disabled
              control={
                <Checkbox
                  checked={CANADA}
                  onChange={handleChange}
                  name="CANADA"
                />
              }
              label="CANADA"
            />
          </th>
          <th>
            <FormControlLabel
              disabled
              control={
                <Checkbox checked={UK} onChange={handleChange} name="UK" />
              }
              label="UNITED KINGDOM"
            />
          </th>
          <th>
            <FormControlLabel
              disabled
              control={
                <Checkbox
                  checked={AUSTRALIA}
                  onChange={handleChange}
                  name="AUSTRALIA"
                />
              }
              label="AUSTRALIA"
            />
          </th>
          <th>
            <FormControlLabel
              disabled
              control={
                <Checkbox
                  checked={NEWZEALAND}
                  onChange={handleChange}
                  name="NEWZEALAND"
                />
              }
              label="NEWZEALAND"
            />
          </th>
        </tr>
        <tr>
          <td>
            <FormControlLabel
              disabled
              control={
                <Checkbox
                  checked={JAPAN}
                  onChange={handleChange}
                  name="JAPAN"
                />
              }
              label="JAPAN"
            />
          </td>
          <td>
            <FormControlLabel
              disabled
              control={
                <Checkbox
                  checked={GERMANY}
                  onChange={handleChange}
                  name="GERMANY"
                />
              }
              label="GERMANY"
            />
          </td>
          <td>
            <FormControlLabel
              disabled
              control={
                <Checkbox
                  checked={POLAND}
                  onChange={handleChange}
                  name="POLAND"
                />
              }
              label="POLAND"
            />
          </td>
          <td>
            <FormControlLabel
              disabled
              control={
                <Checkbox
                  checked={MALYSIA}
                  onChange={handleChange}
                  name="MALYSIA"
                />
              }
              label="MALYSIA"
            />
          </td>
          <td>
            <FormControlLabel
              disabled
              control={
                <Checkbox
                  checked={SINGAPORE}
                  onChange={handleChange}
                  name="SINGAPORE"
                />
              }
              label="SINGAPORE"
            />
          </td>
        </tr>
      </table>
    </div>
  );
}

function ThirdAccordion() {
  const [state, setState] = React.useState({
    one_a: true,
    one_b: false,
    one_c: false,
    two_a: true,
    two_b: false,
    two_c: false,
    three_a: false,
    three_b: false,
    three_c: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const {
    one_a,
    one_b,
    one_c,
    two_a,
    two_b,
    two_c,
    three_a,
    three_b,
    three_c,
  } = state;
  return (
    <div style={{ textAlign: "left", marginLeft: "150px" }}>
      <table>
        <div>
          <h4>Institution Type</h4>
          <tr>
            <th>
              <FormControlLabel
                disabled
                style={{ marginLeft: "120px" }}
                control={
                  <Checkbox
                    checked={one_a}
                    onChange={handleChange}
                    name="public"
                  />
                }
                label="Public"
              />
            </th>
            <th>
              <FormControlLabel
                disabled
                control={
                  <Checkbox
                    checked={one_b}
                    onChange={handleChange}
                    name="private"
                  />
                }
                label="Private"
              />
            </th>
            <th>
              <FormControlLabel
                disabled
                control={
                  <Checkbox
                    checked={one_c}
                    onChange={handleChange}
                    name="any"
                  />
                }
                label="Any"
              />
            </th>
          </tr>
        </div>
        <div>
          <h4>Global Ranking</h4>
          <tr>
            <td>
              <FormControlLabel
                disabled
                style={{ marginLeft: "120px" }}
                control={
                  <Checkbox
                    checked={two_a}
                    onChange={handleChange}
                    name="t100"
                  />
                }
                label="Top 100"
              />
            </td>
            <td>
              <FormControlLabel
                disabled
                control={
                  <Checkbox
                    checked={two_b}
                    onChange={handleChange}
                    name="t300"
                  />
                }
                label="Top 300"
              />
            </td>
            <td>
              <FormControlLabel
                disabled
                control={
                  <Checkbox
                    checked={two_c}
                    onChange={handleChange}
                    name="any"
                  />
                }
                label="Any"
              />
            </td>
          </tr>
        </div>
        <div>
          <h4>Budget</h4>
          <tr>
            <td>
              <FormControlLabel
                disabled
                style={{ marginLeft: "120px" }}
                control={
                  <Checkbox
                    checked={three_a}
                    onChange={handleChange}
                    name="15-20"
                  />
                }
                label="15 - 20 Lakhs"
              />
            </td>
            <td>
              <FormControlLabel
                disabled
                control={
                  <Checkbox
                    checked={three_b}
                    onChange={handleChange}
                    name="20-30"
                  />
                }
                label="20 - 30 Lakhs"
              />
            </td>
            <td>
              <FormControlLabel
                disabled
                control={
                  <Checkbox
                    checked={three_c}
                    onChange={handleChange}
                    name="30+"
                  />
                }
                label="30+"
              />
            </td>
          </tr>
        </div>
      </table>
    </div>
  );
}

function FourthAccordion() {
  const [state, setState] = React.useState({
    a: true,
    b: false,
    c: false,
    d: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { a, b, c, d } = state;
  return (
    <div style={{ textAlign: "left", marginLeft: "150px" }}>
      <div>
        <h4>Year (Fall, Summer or Winter)</h4>
        <FormControlLabel
          disabled
          style={{ marginLeft: "120px" }}
          control={<Checkbox checked={a} onChange={handleChange} name="a" />}
          label="2022"
        />
        <FormControlLabel
          disabled
          control={<Checkbox checked={b} onChange={handleChange} name="b" />}
          label="2023"
        />
        <FormControlLabel
          disabled
          control={<Checkbox checked={c} onChange={handleChange} name="c" />}
          label="2024"
        />
        <FormControlLabel
          disabled
          control={<Checkbox checked={d} onChange={handleChange} name="d" />}
          label="2025"
        />
      </div>
    </div>
  );
}

function FifthAccordion() {
  const [value, setValue] = React.useState("graduate");
  const [value_two, setValue_two] = React.useState("pre-diploma");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div style={{ textAlign: "left", marginLeft: "150px" }}>
      <h4>University / College</h4>
      <RadioGroup
        aria-label="University/College"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          disabled
          value="underGraduate"
          control={<Radio />}
          label="Under Graduate"
        />
        <FormControlLabel
          disabled
          value="graduate"
          control={<Radio />}
          label="Graduate"
        />
        <FormControlLabel
          disabled
          value="doctorate"
          control={<Radio />}
          label="Doctorate"
        />
      </RadioGroup>

      <h4>Pre-College</h4>
      <RadioGroup
        aria-label="University/College"
        name="gender1"
        value={value_two}
        onChange={handleChange}
      >
        <FormControlLabel
          disabled
          value="pre-diploma"
          control={<Radio />}
          label="Pre Diploma"
        />
        <FormControlLabel
          disabled
          value="adv-diploma"
          control={<Radio />}
          label="Advanced Diploma"
        />
      </RadioGroup>
    </div>
  );
}

function SixthAccordion() {
  const [state, setState] = React.useState({
    engineering: false,
    computerScience: true,
    cyberSecurity: true,
    dataScience: true,
    education: false,
    law: false,
    bussinessManagement: false,
    psychology: false,
    mechanical: false,
    medicine: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const {
    engineering,
    computerScience,
    cyberSecurity,
    dataScience,
    education,
    law,
    bussinessManagement,
    psychology,
    mechanical,
    medicine,
  } = state;
  return (
    <div style={{ textAlign: "left", marginLeft: "150px" }}>
      <table>
        <tr>
          <th>
            <FormControlLabel
              disabled
              control={
                <Checkbox
                  checked={engineering}
                  onChange={handleChange}
                  name="engineering"
                />
              }
              label="Engineering"
            />
          </th>
          <th>
            <FormControlLabel
              disabled
              control={
                <Checkbox
                  checked={computerScience}
                  onChange={handleChange}
                  name="computerScience"
                />
              }
              label="Computer Science"
            />
          </th>
          <th>
            <FormControlLabel
              disabled
              control={
                <Checkbox
                  checked={cyberSecurity}
                  onChange={handleChange}
                  name="cyberSecurity"
                />
              }
              label="cyber Security"
            />
          </th>
          <th>
            <FormControlLabel
              disabled
              control={
                <Checkbox
                  checked={dataScience}
                  onChange={handleChange}
                  name="dataScience"
                />
              }
              label="Data Science"
            />
          </th>
          <th>
            <FormControlLabel
              disabled
              control={
                <Checkbox
                  checked={education}
                  onChange={handleChange}
                  name="education"
                />
              }
              label="Education"
            />
          </th>
        </tr>
        <tr>
          <td>
            <FormControlLabel
              disabled
              control={
                <Checkbox checked={law} onChange={handleChange} name="law" />
              }
              label="Law"
            />
          </td>
          <td>
            <FormControlLabel
              disabled
              control={
                <Checkbox
                  checked={bussinessManagement}
                  onChange={handleChange}
                  name="bussinessManagement"
                />
              }
              label="Bussiness Management"
            />
          </td>
          <td>
            <FormControlLabel
              disabled
              control={
                <Checkbox
                  checked={psychology}
                  onChange={handleChange}
                  name="psychology"
                />
              }
              label="Psychology"
            />
          </td>
          <td>
            <FormControlLabel
              disabled
              control={
                <Checkbox
                  checked={mechanical}
                  onChange={handleChange}
                  name="mechanical"
                />
              }
              label="Mechanical"
            />
          </td>
          <td>
            <FormControlLabel
              disabled
              control={
                <Checkbox
                  checked={medicine}
                  onChange={handleChange}
                  name="medicine"
                />
              }
              label="Medicine"
            />
          </td>
        </tr>
      </table>
    </div>
  );
}

function SeventhAccordion() {
  const [state, setState] = React.useState({
    one_a: true,
    one_b: false,
    one_c: false,
    one_d: false,
    two_a: true,
    two_b: false,
    two_c: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { one_a, one_b, one_c, one_d, two_a, two_b, two_c } = state;
  return (
    <div style={{ textAlign: "left", marginLeft: "150px" }}>
      <table>
        <div>
          <h4>English</h4>
          <tr>
            <th>
              <FormControlLabel
                disabled
                style={{ marginLeft: "120px" }}
                control={
                  <Checkbox
                    checked={one_a}
                    onChange={handleChange}
                    name="IELTS"
                  />
                }
                label="IELTS"
              />
            </th>
            <th>
              <FormControlLabel
                disabled
                control={
                  <Checkbox
                    checked={one_b}
                    onChange={handleChange}
                    name="TOEFL"
                  />
                }
                label="TOEFL"
              />
            </th>
            <th>
              <FormControlLabel
                disabled
                control={
                  <Checkbox
                    checked={one_c}
                    onChange={handleChange}
                    name="PTE"
                  />
                }
                label="ANPTEY"
              />
            </th>
            <th>
              <FormControlLabel
                disabled
                control={
                  <Checkbox
                    checked={one_d}
                    onChange={handleChange}
                    name="Duolingo"
                  />
                }
                label="Duolingo"
              />
            </th>
          </tr>
        </div>
        <div>
          <h4>Aptitude</h4>
          <tr>
            <td>
              <FormControlLabel
                disabled
                style={{ marginLeft: "120px" }}
                control={
                  <Checkbox
                    checked={two_a}
                    onChange={handleChange}
                    name="GRE"
                  />
                }
                label="GRE"
              />
            </td>
            <td>
              <FormControlLabel
                disabled
                control={
                  <Checkbox
                    checked={two_b}
                    onChange={handleChange}
                    name="GMAT"
                  />
                }
                label="G MAT"
              />
            </td>
            <td>
              <FormControlLabel
                disabled
                control={
                  <Checkbox
                    checked={two_c}
                    onChange={handleChange}
                    name="SAT"
                  />
                }
                label="SAT"
              />
            </td>
            <td>
              <FormControlLabel
                disabled
                control={
                  <Checkbox
                    checked={two_c}
                    onChange={handleChange}
                    name="ACT"
                  />
                }
                label="ACT"
              />
            </td>
          </tr>
        </div>
      </table>
    </div>
  );
}

function EighthAccordion() {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      padding: "4px 45px",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();

  const [A, setA] = React.useState("25");
  const [B, setB] = React.useState("25");
  const [C, setC] = React.useState("25");
  const [D, setD] = React.useState("25");
  const handleChange = (event) => {
    console.log(event);
    setA(event.target.value);
  };

  return (
    <div style={{ textAlign: "left", marginLeft: "150px" }}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Family Sponsored</InputLabel>
        <Select
          disabled
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={A}
          onChange={handleChange}
        >
          <MenuItem value={25}>25%</MenuItem>
          <MenuItem value={50}>50%</MenuItem>
          <MenuItem value={100}>100%</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Personal Savings</InputLabel>
        <Select
          disabled
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={B}
          onChange={handleChange}
        >
          <MenuItem value={25}>25%</MenuItem>
          <MenuItem value={50}>50%</MenuItem>
          <MenuItem value={100}>100%</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Educational Loan</InputLabel>
        <Select
          disabled
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={D}
          onChange={handleChange}
        >
          <MenuItem value={25}>25%</MenuItem>
          <MenuItem value={50}>50%</MenuItem>
          <MenuItem value={100}>100%</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">
          Grants/Scholarship
        </InputLabel>
        <Select
          disabled
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={D}
          onChange={handleChange}
        >
          <MenuItem value={25}>25%</MenuItem>
          <MenuItem value={50}>50%</MenuItem>
          <MenuItem value={100}>100%</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

function NinthAccordion() {
  const [state, setState] = React.useState({
    one_a: true,
    one_b: false,
    two_a: true,
    two_b: false,
    two_c: false,
    three_a: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { one_a, one_b, two_a, two_b, two_c, three_a } = state;
  return (
    <div style={{ textAlign: "left", marginLeft: "150px" }}>
      <table>
        <div>
          <h4>On Campus Domitories</h4>
          <tr>
            <th>
              <FormControlLabel
                disabled
                style={{ marginLeft: "120px" }}
                control={
                  <Checkbox
                    checked={one_a}
                    onChange={handleChange}
                    name="Dorm"
                  />
                }
                label="Dorm"
              />
            </th>
            <th>
              <FormControlLabel
                disabled
                control={
                  <Checkbox
                    checked={one_b}
                    onChange={handleChange}
                    name="privateRoom"
                  />
                }
                label="Private Room"
              />
            </th>
          </tr>
        </div>
        <div>
          <h4>Off Campus Apartments</h4>
          <tr>
            <td>
              <FormControlLabel
                disabled
                style={{ marginLeft: "120px" }}
                control={
                  <Checkbox
                    checked={two_a}
                    onChange={handleChange}
                    name="sharedWithNative"
                  />
                }
                label="Shared Apartments (with native students"
              />
            </td>
            <td>
              <FormControlLabel
                disabled
                control={
                  <Checkbox
                    checked={two_b}
                    onChange={handleChange}
                    name="international"
                  />
                }
                label="Share Apartments (with international students)"
              />
            </td>
            <td>
              <FormControlLabel
                disabled
                control={
                  <Checkbox
                    checked={two_c}
                    onChange={handleChange}
                    name="private"
                  />
                }
                label="Private Apartment"
              />
            </td>
          </tr>
          <h4>Homestays</h4>
          <tr>
            <td>
              <FormControlLabel
                disabled
                style={{ marginLeft: "120px" }}
                control={
                  <Checkbox
                    checked={three_a}
                    onChange={handleChange}
                    name="family"
                  />
                }
                label="Host Family"
              />
            </td>
          </tr>
        </div>
      </table>
    </div>
  );
}

function TenthAccordion() {
  const [state, setState] = React.useState({
    one_a: true,
    one_b: false,
    one_c: false,
    two_a: true,
    two_b: false,
    two_c: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { one_a, one_b, one_c, two_a, two_b, two_c } = state;
  return (
    <div style={{ textAlign: "left", marginLeft: "150px" }}>
      <table>
        <div>
          <h4>To Seek a Job</h4>
          <tr>
            <th>
              <FormControlLabel
                disabled
                style={{ marginLeft: "120px" }}
                control={
                  <Checkbox
                    checked={one_a}
                    onChange={handleChange}
                    name="inHome"
                  />
                }
                label="In-Home Country"
              />
            </th>
            <th>
              <FormControlLabel
                disabled
                control={
                  <Checkbox
                    checked={one_b}
                    onChange={handleChange}
                    name="inCountry"
                  />
                }
                label="In-Country Studied"
              />
            </th>
            <th>
              <FormControlLabel
                disabled
                control={
                  <Checkbox
                    checked={one_c}
                    onChange={handleChange}
                    name="inAnother"
                  />
                }
                label="In-Another Country"
              />
            </th>
          </tr>
        </div>

        <div>
          <h4>To Study Further</h4>
          <tr>
            <th>
              <FormControlLabel
                disabled
                style={{ marginLeft: "120px" }}
                control={
                  <Checkbox
                    checked={one_a}
                    onChange={handleChange}
                    name="inHome"
                  />
                }
                label="In-Home Country"
              />
            </th>
            <th>
              <FormControlLabel
                disabled
                control={
                  <Checkbox
                    checked={one_b}
                    onChange={handleChange}
                    name="inCountry"
                  />
                }
                label="In-Country Studied"
              />
            </th>
            <th>
              <FormControlLabel
                disabled
                control={
                  <Checkbox
                    checked={one_c}
                    onChange={handleChange}
                    name="inAnother"
                  />
                }
                label="In-Another Country"
              />
            </th>
          </tr>
        </div>
      </table>
    </div>
  );
}

export default Formprint;