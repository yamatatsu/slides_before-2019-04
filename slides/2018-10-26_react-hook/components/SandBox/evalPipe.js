import _React, {
  useState as _useState,
  useEffect as _useEffect,
  useContext as _useContext,
  useReducer as _useReducer,
  useCallback as _useCallback,
  useMemo as _useMemo,
  useRef as _useRef,
  useImperativeMethods as _useImperativeMethods,
  useMutationEffect as _useMutationEffect,
  useLayoutEffect as _useLayoutEffect,
  forwardRef as _forwardRef,
  memo as _memo,
} from 'react'
import { createResource as _createResource, createCache as _createCache } from "simple-cache-provider";
import { transform } from '@babel/core/lib/transform'
import stringify from 'json-stringify-pretty-compact'

// for eval
import _ from 'lodash'
import * as fp from 'lodash/fp'
import * as R from 'ramda'
import * as I from 'immutable'
import * as SI from 'seamless-immutable'
import _produce from 'immer'
import * as mori from 'mori'
import * as powerAssign from 'power-assign'

const produce = _produce
const React = _React
const useState = _useState
const useEffect = _useEffect
const useContext = _useContext
const useReducer = _useReducer
const useCallback = _useCallback
const useMemo = _useMemo
const useRef = _useRef
const useImperativeMethods = _useImperativeMethods
const useMutationEffect = _useMutationEffect
const useLayoutEffect = _useLayoutEffect
const forwardRef = _forwardRef
const memo = _memo
const createResource = _createResource
const createCache = _createCache

const transformOptions = {
  inputSourceMap: false,
  babelrc: false,
  presets: [
    require("@babel/preset-react"),
  ],
  plugins: [
    [require("@babel/plugin-proposal-pipeline-operator"), { proposal: "minimal" }],
    require("@babel/plugin-proposal-optional-chaining"),
    require("@babel/plugin-proposal-object-rest-spread"),
    require("@babel/plugin-proposal-class-properties"),
  ],
}

export default function evalPipe(code) {
  const Sample = eval(transform(code, transformOptions).code)
  return Sample
}
