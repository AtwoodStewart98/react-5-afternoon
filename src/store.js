import React, { Component } from "react";
import { createStore } from "redux";

import reducer from "./ducks/reducer.js";

export default createStore(reducer);
