import mitt, { Emitter } from "mitt";

export type Events = {
  "ui-lock": boolean;
};

const emitter: Emitter<Events> = mitt<Events>();

export default emitter;
