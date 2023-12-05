# Advent of Code Javascript Project Template

A Javascript Advent of Code project template using Deno.

## Getting Started

Click on the gear icon below the profile icon in VSCode. Select
"Profiles(Default)", the "Default" might be something else if you've made a
profile before. Select "Import Profile...". Select "Select File...". You should
now be in your default file explorer in the current projects directory. Select
`aoc.code-profile`. Click "Open". Click "Create Profile" in VSCode under the
section that should be labeled "Profiles: AOC". Click "Create" in the dropdown
window labeled "Create New Profile..." next to the input that has the value
"aoc" in it. Your VSCode should say that it's applying the profile and
installing extensions, your VSCode might fluctuate it's font size and color
theme. One everything has finished installing go to the "Extensions" tab and
check to see if the extensions "Better Comments" and "Deno" are installed. If
they are you've done everything correctly.

Run the following commands,

```sh
nvm install
nvm use
npm install
```

this should install the proper Node and NPM version and install all the needed
NPM packages.

Now, run the following commands,

```sh
npm run plop
```

this should then prompt you in your terminal by asking,

```sh
? What day are you starting?
```

if you're on day 1 then enter 1. You should then see a list of files created
under your `src` folder in a folder called `day1`. You've created the proper
template to start coding!

## Coding & Testing

Now, go into the day folder you just created and go into the `index.ts` file,
this is where you'll be coding and writing your algorithmns. The `part1`
function corresponds to the first problem for that day and the `part2` for the
second. Most problems ask you to get the summation usually so I left a `result`
variable where you can add those values up.

If you then go into the `index.test.ts` file, this is the place where all your
test cases are. The only thing you should have to change is the `null` values
under the red comments to whatever example output they give you for that day.
You'll notice that there are tests labeled as examples. Those tests are for the
input they give you off the bat as an example problem, which they also give the
correct output. These are for testing your function and are really the only
"tests". The other "tests" are the actual problems they give you in which you
don't know the answer, you should notice that they don't use the `assertEquals`
function since you don't know the answer. However, in place they should
`console.log` whatever your program spits out which you can then copy and paste
into the answer box at the bottom of the page for that day.

However, if you run these tests you'll notice that you're not getting any input
or the input is blank! This is because we haven't filled out our text files with
the input that was given. So, go into the current day's folder into the
`part1example.txt` file. This is the text file that's read into the function
within the test case. I made these files seperate so it's easy to copy, paste
and modify your tests to see how they react. If you go to the current day's
problem and grab the example test data you can then copy and paste it into the
text file. It should copy and paste cleanly with only an extra line at the
bottom of the file that you can delete, if you don't it might cause issues with
your program. After copy and pasting the example problem make sure to set the
proper example output in the `index.test.ts` under the correct test
`assetEquals`. Now, if you click on "Testing" in VSCode, the beaker icon, you
should see a list of your files with all their tests below them. If you click on
the play button next to "Part 1 Example" it'll pass the data from
`part1example.txt` to your `part1` function. You'll probably see it fail with a
big red "X". This is because you haven't written your program yet and your
program is probably returning the unmodified `result` variable which has the
value `0`. Now you can fully start writing your program in the `part1`
function's body and testing to see if you get the correct value. The only other
thing I'll make note of is make sure you grab your actual input from the website
and put it in `part1.txt` for your actual problem once you get the example
returning the correct output. From there, all days are a repeat of creating the
template folders/files from plop and inserting your given inputs. Enjoy your
Advent of Code!

## Notes

- Make sure to make your repository private if you plan on pushing to GitHub.
- The second part of each day is usually pretty tough so I see it as a challenge
  to go above and beyond. If you just complete the first part you can advance to
  the next day. I plan on going back through at the end of the event and trying
  my hand at the second parts of the problem.
