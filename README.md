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

<br>

## Update 2
Reverting to older git version caused even more problems. Apparently, expo changes versions and node modules also undergo a variety of modifications when switching between git versions. All this has completely removed me from the track.
I'll probably delete the entire app, and start again.

<br>

## Update 3
Tried again with older version of npm (v6.14.16 instead of v8.6.0) and also an older version of node (v16.14.2 instead of v17.9.0).<br>
I did see some success. It could mean that latest versions of node and npm might be the problem, as in another chatting app i recently created (repository not public yet) using stream.io, AWS Amplify, and AWS GraphQL, there was a significant performance boost while using these older versions.
<br>
<br>
In any case, I think I have to build this entire app back from scratch.
