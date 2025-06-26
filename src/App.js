import { Component } from "react";
import "./App.css";
import Bar from "./components/Bar";
import RotateLeftRoundedIcon from "@mui/icons-material/RotateLeftRounded";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import BubbleSort from "./algorithms/BS";
import InsertionSort from "./algorithms/IS";
import selection from "./algorithms/Selection";
import mergeSort from "./algorithms/Merge";
import quickSort from "./algorithms/Quicksort";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    array: [],
    arraySteps: [],
    colorKey: [],
    colorSteps: [],
    currentStep: 0,
    count: 10,
    delay: 100,
    algorithm: "Selection Sort",
    timeouts: [],
  };

  ALGORITHMS = {
    "Bubble Sort": BubbleSort,
    "Insertion Sort": InsertionSort,
    "Selection Sort": selection,
    "Merge Sort": mergeSort,
    "Quick Sort": quickSort,
  };

  componentDidMount() {
    this.generateRandomArray();
  }

  generateSteps = () => {
    let array = this.state.array.slice();
    let steps = this.state.arraySteps.slice();
    let colorSteps = this.state.colorSteps.slice();

    this.ALGORITHMS[this.state.algorithm](array, 0, steps, colorSteps);

    this.setState({
      arraySteps: steps,
      colorSteps: colorSteps,
    });
  };

  clearTimeouts = () => {
    this.state.timeouts.forEach((timeout) => clearTimeout(timeout));
    this.setState({
      timeouts: [],
    });
  };

  clearColorKey = () => {
    let blankKey = new Array(this.state.count).fill(0);

    this.setState({
      colorKey: blankKey,
      colorSteps: [blankKey],
    });
  };

  generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  generateRandomArray = () => {
    this.clearTimeouts();
    this.clearColorKey();
    const count = this.state.count;
    const temp = [];

    for (let i = 0; i < count; i++) {
      temp.push(this.generateRandomNumber(50, 200));
    }

    this.setState(
      {
        array: temp,
        arraySteps: [temp],
        currentStep: 0,
      },
      () => {
        this.generateSteps();
      }
    );
  };

  changeArray = (index, value) => {
    let arr = this.state.array;
    arr[index] = value;
    this.setState(
      {
        array: arr,
        arraySteps: [arr],
        currentStep: 0,
      },
      () => {
        this.generateSteps();
      }
    );
  };

  previousStep = () => {
    let currentStep = this.state.currentStep;
    if (currentStep === 0) {
      return;
    }

    currentStep -= 1;
    this.setState({
      currentStep: currentStep,
      array: this.state.arraySteps[currentStep],
      colorKey: this.state.colorSteps[currentStep],
    });
  };

  nextStep = () => {
    let currentStep = this.state.currentStep;
    if (currentStep >= this.state.arraySteps.length - 1) {
      return;
    }

    currentStep += 1;
    this.setState({
      currentStep: currentStep,
      array: this.state.arraySteps[currentStep],
      colorKey: this.state.colorSteps[currentStep],
    });
  };

  start = () => {
    let steps = this.state.arraySteps;
    let colorSteps = this.state.colorSteps;

    this.clearTimeouts();

    let timeouts = [];
    let i = 0;

    while (i < steps.length - this.state.currentStep) {
      let timeout = setTimeout(() => {
        let currentStep = this.state.currentStep;
        this.setState({
          array: steps[currentStep],
          colorKey: colorSteps[currentStep],
          currentStep: currentStep + 1,
        });
        timeouts.push(timeout);
      }, this.state.delay * i);
      i++;
    }
    this.setState({
      timeouts: timeouts,
    });
  };

  handleAlgorithmChange = (e) => {
    const algo = e.target.value;
    this.setState({ algorithm: algo }, () => {

      this.generateRandomArray();
    });
  };

  selectAlgorithm = (algo) => {
    this.setState({ algorithm: algo }, () => {
      this.generateRandomArray();
    });
  };

  setSpeed = (multiplier) => {
    const newDelay = Math.floor(100 / multiplier);
    this.setState({ delay: newDelay });
  };
  render() {
    let bars = this.state.array.map((value, index) => {
      return (
        <Bar
          key={index}
          index={index}
          length={value}
          color={this.state.colorKey[index]}
          changeArray={this.changeArray}
        />
      );
    });

    let playButton;

    if (this.state.arraySteps.length === this.state.currentStep) {
      playButton = (
        <button className="controller" onClick={this.generateRandomArray}>
          <RotateLeftRoundedIcon />
        </button>
      );
    } else {
      playButton = (
        <button className="controller" onClick={this.start}>
          <PlayCircleOutlineRoundedIcon />
        </button>
      );
    }

    return (
      <div className="app">
        <Header />
        <div className="frame">
          <div className="barsDive container card">{bars}</div>
        </div>
        <div className="control-panel">
          <div className="control-options">
            <div className="algo-buttons">
              {Object.keys(this.ALGORITHMS).map((name) => {
                const isActive = this.state.algorithm === name;
                return (
                  <button
                    key={name}
                    className={`algo-btn${isActive ? " active" : ""}`}
                    onClick={() => this.selectAlgorithm(name)}
                  >
                    {name}
                  </button>
                );
              })}
            </div>

            <div className="speed-buttons">
              Speed:
              {[1, 2, 3, 4, 5].map((mult) => {

                const d = Math.floor(100 / mult);
                const isActive = this.state.delay === d;
                return (
                  <button
                    key={mult}
                    className={`speed-btn ${isActive ? "active" : ""}`}
                    onClick={() => this.setSpeed(mult)}
                  >
                    {mult}×
                  </button>
                );
              })}
            </div>
          </div>

          <div className="control-buttons">
            <button className="controller" onClick={this.previousStep}>
              <SkipPreviousRoundedIcon />
            </button>
            {playButton}
            <button className="controller" onClick={this.nextStep}>
              <SkipNextRoundedIcon />
            </button>
          </div>
        </div>
        <div className="panel"></div>
        <Footer />
      </div>
      
    );
  }
}

export default App;
