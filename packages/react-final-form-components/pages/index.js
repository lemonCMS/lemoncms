import React from "react";
import Head from "next/head";
import { Form, Input } from "../modules";
import Password from "../modules/Types/Password";
import Well from "react-bootstrap/lib/Well";
import Checkbox from "../modules/Types/Checkbox";
import Radio from "../modules/Types/Radio";
import Show from "../modules/Types/Show";
import Select from "../modules/Types/Select";
import Error from "../modules/Types/Error";
import Success from "../modules/Types/Success";
import Button from "../modules/Types/Button";
import "./react-datetime.css";
import Complex, { Header, Footer } from "../modules/Types/Complex";
import Panel from "react-bootstrap/lib/Panel";
import ButtonGroup from "react-bootstrap/lib/ButtonGroup";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import DropdownButton from "../modules/Types/DropdownButton";
import { FORM_ERROR } from "final-form";
import Textarea from "../modules/Types/Textarea";
import Dropzone from "../modules/Types/Dropzone";
import Slider from "rc-slider";
import Custom from "../modules/Types/Custom";
import "rc-slider/assets/index.css";

const ipsy = name => (
  <DropdownButton
    name={`${name}.ipsy`}
    label={"SelectBox"}
    placeholder={"dropdown title"}
  >
    <option value={"hailey"}>Hailey</option>
    <option value={"aiden"}>Aiden</option>
    <option value={"mayson"}>Mayson</option>
  </DropdownButton>
);

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        crossOrigin="anonymous"
      />

      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
        integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
        crossOrigin="anonymous"
      />
      <script
        src="/tinymce/js/tinymce/tinymce.min.js"
        type="text/javascript"
      ></script>
    </Head>
    <div id={"container"}>
      <div className={"row"}>
        <div className={"col-md-6"}>
          <Well>
            <h2>Login Example</h2>
            <Form
              static
              onSubmit={async data => {
                return await new Promise(resolve => {
                  resolve({ [FORM_ERROR]: "KNUTSELS" });
                });
              }}
              validate={async () => {}}
              initialValues={{
                username: "amber#99",
                checkboxes: ["4", "9", "8"],
                radios: "aiden",
                "single-checkbox": true,
                "single-checkbox-2": false,
                "select-multi": [],
                dropdown: "aiden"
              }}
              layout={{
                label: { md: 3 },
                field: { md: 9 }
              }}
            >
              {/*<Tmc name={"tmcr"} />*/}
              {/*<DateTimePicker name={"datetime-picker"} label={"Custom field"} />*/}
              {/*<Datetime name={"datetime"} label={"Custom field Datetime"} />*/}
              <Textarea name={"textarea"} label={"textarea"} rows={10} />

              <Input
                name={"username"}
                label={"Username"}
                disabled={values => values.radios === "mayson"}
                layout={{
                  label: { md: 9 },
                  field: { md: 3 }
                }}
              />
              <Password
                addOnBefore={"#"}
                name={"password"}
                label={"Password"}
                disabled={values => values.radios === "mayson"}
              />
              <Checkbox
                mandatory
                name={"checkboxes"}
                label={"Multiple checkboxes"}
                columns={4}
                disabled={values => true}
                filter
              >
                <option value={"1"}>1</option>
                <option value={"2"}>2</option>
                <option value={"3"}>3</option>
                <span>Doe eens iets geks erbij</span>
                <option value={"4"}>4</option>
                <option value={"5"}>5</option>
                <option value={"6"}>6</option>
                <option value={"7"}>7</option>
                <option value={"8"}>8</option>
                <option value={"9"}>9</option>
                <option value={"10"}>10</option>
                <option value={"11"}>
                  <b>xyz</b>
                </option>
                <option value={"12"}>12</option>
                <option value={"13"}>13</option>
                <option value={"14"}>14</option>
                <option value={"15"}>15</option>
              </Checkbox>

              <Checkbox name={"single-checkbox"} label={"Single checkbox"} />

              <Checkbox
                name={"single-checkbox-2"}
                label={"Single checkbox without option tag default label"}
              >
                <em>Ik</em> ga akkoord met de <b>voorwaarden</b>.
              </Checkbox>

              <Checkbox
                name={"single-checkbox-3"}
                label={"Single checkbox with option tag and default label"}
              >
                <option value={"1"}>Test 1</option>
              </Checkbox>

              <Radio name={"radios"} label={"Radio"} filter columns={3}>
                <option value={"hailey"}>Hailey</option>
                <option value={"aiden"}>Aiden</option>
                <option value={"mayson"}>Mayson</option>
                <option value={"mayson1"}>Mayson</option>
                <option value={"mayson2"}>Mayson</option>
                <option value={"mayson3"}>Mayson</option>
                <option value={"mayson4"}>Mayson</option>
                <option value={"mayson5"}>Mayson</option>
                <option value={"mayson6"}>Mayson</option>
                <option value={"mayson7"}>Mayson</option>
                <option value={"mayson8"}>Mayson</option>
                <option value={"mayson9"}>Mayson</option>
                <option value={"maysons"}>Mayson</option>
                <option value={"maysonss"}>Mayson</option>
                <option value={"maysond"}>Mayson</option>
                <option value={"maysonf"}>Mayson</option>
                <option value={"maysong"}>Mayson</option>
                <option value={"maysonh"}>
                  <b>Mayson</b>
                </option>
                <option value={"maysonj"}>Mayson</option>
                <option value={"maysonr"}>Mayson</option>
                <option value={"maysont"}>Mayson</option>
                <option value={"maysony"}>Mayson</option>
                <option value={"maysonu"}>Mayson</option>
                <option value={"maysoni"}>Mayson</option>
                <option value={"maysono"}>Mayson</option>
              </Radio>
              <Show
                name="show1"
                condition={values => values.radios === "mayson"}
              >
                AMBER
              </Show>

              <Select name={"select-single"} label={"SelectBox"}>
                <option value={"hailey"}>Hailey</option>
                <option value={"aiden"}>Aiden</option>
                <option value={"mayson"}>Mayson</option>
              </Select>

              <Row>
                <Col md={4}>Tijdstip:</Col>
                <Col md={8}>
                  <Row>
                    <Col md={6}>
                      <Select
                        name={"select-multix"}
                        label={""}
                        addOn={":"}
                        layout={{ field: { md: 12 } }}
                      >
                        <option value={"hailey"}>Hailey</option>
                        <option value={"aiden"}>Aiden</option>
                        <option value={"mayson"}>Mayson</option>
                      </Select>
                    </Col>
                    <Col md={6}>
                      <Select
                        name={"select-multiy"}
                        label={""}
                        layout={{ field: { md: 12 } }}
                      >
                        <option value={"hailey"}>Hailey</option>
                        <option value={"aiden"}>Aiden</option>
                        <option value={"mayson"}>Mayson</option>
                      </Select>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <DropdownButton
                name={"dropdown"}
                label={"SelectBox"}
                placeholder={"dropdown title"}
              >
                <option value={"hailey"}>Hailey</option>
                <option value={"aiden"}>Aiden</option>
                <option value={"mayson"}>Mayson</option>
              </DropdownButton>

              <Dropzone
                name="dropzone"
                endPoint={{ path: "/xyz" }}
                label={"DROPZONE"}
              />

              <Complex name={"section"}>
                <Header>
                  {({ push, pop }) => (
                    <Panel>
                      <Panel.Heading>
                        <Panel.Title componentClass="h3">
                          Panel heading with a title
                        </Panel.Title>
                      </Panel.Heading>
                      <Panel.Body>
                        <ButtonGroup>
                          <Button onClick={() => push({})}>add</Button>
                          <Button onClick={() => pop()}>remove</Button>
                        </ButtonGroup>
                      </Panel.Body>
                    </Panel>
                  )}
                </Header>
                {({ name, index }) => {
                  return (
                    <Panel key={name}>
                      <Panel.Heading>
                        <Panel.Title componentClass="h3">
                          User [{index + 1}]
                        </Panel.Title>
                      </Panel.Heading>
                      <Panel.Body>
                        <Input name={`${name}.title`} addon={ipsy(name)} />
                      </Panel.Body>
                    </Panel>
                  );
                }}
              </Complex>

              <Radio
                name={"field"}
                placeholder={"a nice placeholder"}
                help={"What was your mothers maiden name?"}
              >
                <span>I agree with the terms</span>
              </Radio>
              <Custom name={"slider"}>
                {({ input }) => <Slider min={0} max={20} defaultValue={3} />}
              </Custom>

              <Error>Well, shit just hit the fan.</Error>
              <Success>Well, shit just hit the fan.</Success>
              <Button type={"submit"} bsStyle={"primary"}>
                Send
              </Button>
            </Form>
          </Well>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
