# SilverScreen
A completely free media streaming application with Movies, TV shows, and Web Series from all the paid apps like Netflix, PrimeVideo, Disney+, HBO Max, etc.

## Technologies
* Front-end : React Native, Expo
* Back-end : Amazon Web Services(Amplify, GraphQL, S3 DataStore, Lambda)

## Features
* Free access to unlimited Movies, TV shows, Anime, Web Series
* AWS email authentication for security
* Download content for offline watching and sharing
* Full HD videos

***
***

# Error Logs

Error in using AWS DataStore and AWS GraphQL at the same time. Enabling conflict resolution is the root cause of problems being faced in the development of this app.<br>
<br>
Currently working on a way to solve this major issue.
<br>
<br>

## Update 1
Since AWS Amplify is causing unneccessary problems due to internal issues when backend schema was hand-typed, I will build the entire backend again from scratch. This time, I'll use the UX instead of CLI of AWS amplify.

## Update 2
Reverting to older stage caused even more problems. Apparently, expo changes versions and node modules undergo a variety of modifications when switching between git versions. All this has completely removed me from the track.
I'll probably delete the entire app, and start again.
