import React, { ReactNode } from 'react';
import './stack.css';
import PropTypes from "prop-types"

interface StackProps {
  children: React.ReactNode;
  spacing?: number;
  wrap?: boolean;
  direction: "row" | "column";
  numberOfChildren: number;
}

function Stack({ children, spacing = 2, wrap = false, direction }: StackProps): JSX.Element {
  const style = {
    display: "flex",
    gap: `${spacing * 0.25}rem`,
    wrap: wrap ? "wrap" : "nowrap",
    flexDirection: direction,
  }
  return <div style={style}>{children}</div>
}

Stack.propTypes = {
  spacing: PropTypes.number,
  wrap: PropTypes.bool,
  direction: PropTypes.oneOf(["row", "column"]),
}

export default Stack;