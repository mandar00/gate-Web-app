import React from 'react'

const Rough=() =>{
    const text=`
    Signals & Systems - Introduction
    Signals & Systems - Important Point About Signals
    Signals & Systems -Types of Signals
    Signals & Systems - Unit Step Signals
    Signals & Systems - Impulse Function
    Signals & Systems - Signum Function
    Signals & Systems - Exponential Signal
    Signals & Systems - Unit Ramp Signal
    Signals & Systems - Unit Parabolic Signal
    Signals & Systems - Unit Rectangle Pulse
    Rectangular Function Problem Example
    Signals & Systems - Triangular Signal
    Signals & Systems - Triangular Signal Example
    Signals & Systems - Sinusoidal Signal
    Signals & Systems - Since & Sampling Function
    Signals & Systems - Operations on Signals
    Operations on Amplitude of Signals
    Operations on Time of Signals
    Signals & Systems - Classification of Signals
    Continuous Time & Discrete Time Signals
    Deterministic & Non-deterministic Signals
    Signals & Systems - Even & Odd Signals
    Signals & Systems - Even & Odd Components
    Even & Odd Components of a Signal Example 1
    Even & Odd Components of a Signal Example 2
    Signals & Systems - Periodic & Aperiodic Signals
    Signals & Systems - Checking of Periodicity
    Energy Signals & Power Signals
    Energy & Power of a Signal Example
    Energy & Power of Unit Step Signals
    Energy & Power of Exponential Signal with Negative Power
    Energy of a Signal Example
    Calculating Energy of Triangular Signal
    Energy & Power of Exponential Signal With Positive Power
    Energy & Power of a Signals Example
    Energy & Power Of Ramp Signals
    Real & Imaginary Signals
    Signals & Systems - Classification of a Systems
    Signals & Systems - Linear & None-linear System
    Signals & Systems - Time Variant & Time Invariant
    Linear Time Variant & Linear Time Invariant Systems
    Signals & Systems - Static & Dynamic System
    Causal & None Causal Systems
    Signals & Systems - Invertible & None Invertible
    Signals & Systems - Stable & Unstable System
    Impulse Response & Transfer Function of a System
    Ramp Signal Problem Example
    Energy & power of Discrete Signal
    Energy & Power Signals Problem Example
    Estimating Energy & Power of Discrete Signal
    Checking of Periodicity of a Discrete Signal
    Periodicity of Discrete Time Signal
    Periodicity Discrete Unit Step Signal
    Impulse Function Problem Example
    Check for Stability of Signals
    Causality Problem Example
    Stability & Causality Problem Example
    Impulse Function Example
    Signals and Systems - Convolution
    Method to Calculate Continuous Convolution
    Convoluted Signal Limits
    Convolution by Image Method
    Properties of Convolution
    Distributive Property Problem Example
    Convolution Problem Example 1
    Properties of Convolution Problem Example
    Other Properties of Convolution
    Area of Convoluted Signal
    Scaling in Convolution
    Ramp in Convolution Problem Example
    Convolution of Unit Step with Ramp using Differentiation Property
    Convolution Problem Example 2
    Discrete Signal Problem Example
    Method to Find Discrete Convolution
    Sum by Column Method to Calculate Discrete Convolution
    Periodic or Circular Convolution
    Matrix Method to Calculate Circular Convolution
    Signals and Systems - Deconvolution
    Division Method for Deconvolution
    Fourier Series Representation of Signal
    Deriving Fourier Series
    Properties of Fourier Series
    Symmetry Properties
    Spectral Properties of Periodic Power Signal
    Dirichlet’s Conditions
    Trigonometric Fourier Series
    Exponential Fourier Series
    Relation Between Trigonometric & Exponential Fourier Series
    Fourier Coefficient of Impulse Train Problem Example
    Gate Shortcut to Predict Nature of Fourier Coefficient
    Fourier Series Coefficient Problem Example
    Polar Form
    Fourier Series Representation Using Symmetry of Signal
    Fourier Series Representation Using Symmetry Problem
    Discrete Time Fourier Series Problem Example
    Gate Shortcuts to Calculate Trigonometric Fourier Series & Power
    DC Component
    Amplitude of Fundamental Components
    DC Components of Signal Problem Example
    Introduction to Fourier Transform
    Deriving Fourier Transform From Fourier Series
    Fourier Transform of Gate Function
    Fourier Transform of Impulse
    Fourier Transform of DC Signal
    Fourier Transform of Cosine Wave
    Fourier Transform of Unit Step Function
    Fourier Transform - Linearity Property
    Fourier Transform - Time Shifting Property
    Fourier Transform - Frequency Shifting Property
    Time Differentiation & Integration Property
    Fourier Transform - Duality & Similarity Property
    Fourier Transform - Time Scaling Property
    Multiplication & Convolution Property
    Fourier Transform of Shifted Unit Step
    Fourier Transform of two-Sided Exponential
    Inverse Fourier Transform Problem Example
    Standard Fourier Transform Pairs
    Inverse Fourier Transform Problem Example 2
    Inverse Fourier Transform Problem Example 3
    Fourier Transform Gate Problem Example
    Distortion Less Transmission of the System
    Hilber Transform
    Introduction to Correlation
    Auto Correlation Function of Energy Signal
    Auto Correlation Function of Energy Signal Property 1
    Auto Correlation Function of Energy Signal Property 2
    Auto Correlation Function of Energy Signal Property 3
    Auto Correlation Function of Energy Signal Property 4
    Auto Correlation Function of Power Signals & Properties
    Relation Between Input Energy Spectral Density & Output Energy Spectral Density
    Auto Correlation Function of Energy Signal Problem
    Auto Correlation Function of Power Signal Problem
    Cross Correlation Function
    Properties of Cross Correlation Function
    Cross Correlation Function of Power Signal & it’s Properties
    Relation Between Power Spectral Density Problem
    Parseval’s Energy Theory Problem Example
    Energy Spectral Density Calculation
    Energy of a Time Scaled Signal
    Sampling Theorem
    Sampling Theorem Proof
    Cutoff Frequency of Filter
    Cutoff Frequency of Filter Problem Example 1
    Cutoff Frequency of Filter Problem Example 2
    Sampling Frequency Problem Example 1
    Sampling Frequency Problem Example 2
    Sampling Frequency Problem Example 3
    Calculating Sampling Frequency Problem Example
    Way to Find Nyquist Sampling
    Frequency Components at the Output of LPF
    Laplace Transform
    Relation Between Laplace & Fourier Transform
    Inverse Laplace Transform
    Conditions for Existence of Laplace Transform
    List of Properties in Laplace Transform
    Linearity Property in Laplace Transform
    Time Shifting Property in Laplace Transform
    Frequency Shifting Property in Laplace Transform
    Time Reversal Property in Laplace Transform
    Time Scaling Property Laplace Transform
    Differentiation & Integration Property
    Multiplication & Convolution Properties of Laplace Transform
    Initial Value Theorem
    Final Value Theorem
    Region of Convergence in Laplace Transform & It's Properties
    Laplace Transform of Right Side Decaying Exponential
    Laplace Transform of Left Side Decaying Exponential
    Laplace Transform & Region of Convergence of Raising Exponential
    Region of Convergence Problem Example
    Laplace Transform & Region of Convergence Problem Example 1
    Laplace Transform & Region of Convergence Problem Example 2
    Laplace Transform of DC Signal
    Laplace Transform of Signum Function
    Unilateral Laplace Transform
    Time Shifting Property in Laplace Transform Problem
    Some Standard Signals & Their Laplace Transform & ROC
    Time Shifting Property Problem Example
    Inverse Laplace Transform Using Time Shifting Property Problem
    Frequency Shifting Property Problem Example
    Inverse Laplace Transform Problem Example 1
    Inverse Laplace Transform Problem Example 2
    Inverse Laplace Transform Problem Example 3
    Transform Function by Using Inverse Laplace Transform Problem
    Transform Function in Laplace Transform Problem Example
    Differential Equation Solving Using Laplace Transform
    Unilateral Laplace Transform of Left Shifted Impulse
    Find Value Theorem Problem Example
    Causality & Stability
    Causality & Stability Problem Example
    Laplace Transform of Ramp Problem Example
    Laplace Transform of Shifted Ramp
    Convolution Property Problem Example
    Final value of Theorem Problem Example 1
    Final value of Theorem Problem Example 2
    Introduction to Z-Transform
    Z-Transfer & Inverse Z-Transfer
    Z-Transform Problem Example 1
    Z-Transform Problem Example 2
    Inverse Z-Transform Problem Example
    Z-Transform of Basic Signal Problem Example 1
    Z-Transform of Basic Signal Problem Example 2
    Z-Transform of Basic Signal Problem Example 3
    Z-Transform of Unit Step Function
    Z-Transform of Impulse Function
    Z-Transform of COS Signal Type-1
    Z-Transform of COS Signal Type-2
    Z-Transform GATE Problem Example 1
    Z-Transform GATE Problem Example 2
    Z-Transform GATE Problem Example 3
    Initial & Final Value Theorems in Z-Transform
    Basic Z-Transform Pairs
    Region of Convergence of Z-Transform
    Linearity Property of Z-Transform
    Time Shifting Property of Z-Transform
    Time Reversal Property of Z Transform
    Scaling Property of Z-Transform
    Differentiation in Z-Domain Property of Z-Transform
    Differentiation in Z-Domain Property Problem Example 1
    Differentiation in Z-Domain Property Problem Example 2
    Inverse Z-Transform Problem Example 2
    Multiplication & Convolution Property of Z-Transform
    Convolution Property of Z-Transform Problem Example
    Initial Value Theorem Problem Example
    System Function & Impulse Response Problem Example
    Unilateral Z-Transform
    Causality & Stability According to ROC of Z-Transform
    Important ROCs Related to Impulse Function
    Z-Transform Problem Example
    Region of Convergence Problem Example
    Stable but not Casual Problem Example
    System to be Causal & Stable Problem Example
    Long Division Method to Calculate Inverse Z-Transform
    Direct Computation Method to Calculate Inverse Z-Transform
    Residue Theorem to Calculate Inverse Z-Transform
    ROC of a Discrete Time Sequence in Z-Transform
    Linear Discrete Time System of Z-Transform Problem Example
    Final Value Theorem Problem Example
    Response of the System Problem Example
    Region of Convergence Gate Problem
    Tutorix Simply Easy Learning Steps
    Tutorix Brings Simply Easy Learning
    Tutorix Brings Simply Easy Learning
     
`
    const strToArr=(str)=>{
        let arr=str.split("    ")
        arr=arr.map((val)=>{
            return val.replace(/\d(?=:)/g,"     ")
        })
        const Arr=arr.map((val)=>{
            return val.replace(/\n/g,"|")
        })
        console.log(Arr)    
    }  
    strToArr(text)
return(
    <>
      
    </>)
}
export default Rough