import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
  .bug {
    background: #aedf78;
  }

  .water {
    background: #43ccff;
  }

  .grass {
    background: #00ca91;
  }

  .fire {
    background: #e95c4d;
  }

  .normal {
    background: #a5a5a5;
  }

  .poison {
    background: #cca9dd;
  }

  .fairy {
    background: #e0bbe4;
  }

  .ground {
    background: #8b6c5c;
  }

  .rock {
    background: grey;
  }

  .electric {
    background: #ffb449;
  }

  .fighting {
    background: #ff2014;
  }

  .ghost {
    background: #e7f1e8;
  }

  .psychic {
    background: yellowgreen;
  }

  .ice {
    background: #4dddff;
  }
}

`