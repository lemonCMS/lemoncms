import React from "react";
import Head from "next/head";
import { Form, Text } from "../modules";
import Password from "../modules/Types/Password";
import Well from "react-bootstrap/lib/Well";
import Checkbox from "../modules/Types/Checkbox";
import Radio from "../modules/Types/Radio";
import Show from "../modules/Types/Show";
import Select from "../modules/Types/Select";
import Datetime from "../custom/DateTime";
import "./react-datetime.css";
import DateTimePicker from "../custom/DateTimePicker";
import Tmc from "../custom/Tinymce";
import DropZone from "../modules/Types/DropZone";

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
              debug
              onSubmit={data => console.log(data)}
              initialValues={{
                username: "amber#99",
                checkboxes: ["4", "9", "8"],
                radios: "aiden",
                "single-checkbox": true,
                "single-checkbox-2": false,
                "select-multi": []
              }}
            >
              <Tmc name={"tmcr"} />
              <DateTimePicker name={"datetime-picker"} label={"Custom field"} />
              <Datetime name={"datetime"} label={"Custom field Datetime"} />
              <Text
                name={"username"}
                label={"Username"}
                disabled={values => values.radios === "mayson"}
              />
              <Password name={"password"} label={"Password"} />
              <Checkbox
                name={"checkboxes"}
                label={"Multiple checkboxes"}
                columns={4}
                filter
              >
                <option value={"1"}>1</option>
                <option value={"2"}>2</option>
                <option value={"3"}>3</option>
                <option value={"4"}>4</option>
                <option value={"5"}>5</option>
                <option value={"6"}>6</option>
                <option value={"7"}>7</option>
                <option value={"8"}>8</option>
                <option value={"9"}>9</option>
                <option value={"10"}>10</option>
                <option value={"11"}>11</option>
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

              <Radio name={"radios"} label={"Multiple checkboxes"}>
                <option value={"hailey"}>Hailey</option>
                <option value={"aiden"}>Aiden</option>
                <option value={"mayson"}>Mayson</option>
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

              <Select name={"select-multi"} label={"SelectBox"} multiple>
                <option value={"hailey"}>Hailey</option>
                <option value={"aiden"}>Aiden</option>
                <option value={"mayson"}>Mayson</option>
              </Select>

              <DropZone
                name="dropzone"
                endPoint={{ path: "/xyz" }}
                label={"DROPZONE"}
              />

              <button type={"submit"}>Sexnd</button>
            </Form>
          </Well>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
