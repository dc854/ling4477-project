// Type code below this line.

// Remove command prefix
PennController.ResetPrefix(null)
var showProgressBar = false;

// Turn off debugger
DebugOff()
Sequence ("welcome", "info", "instructions1", "instructions2", rshuffle("experimental-trial", "filler-trial"))

// Instructions
newTrial("welcome",
    defaultText
        .center()
        .print()
    ,
    newText("instructions-1", "Welcome!")
    ,
    newText("instructions-2", "<p>Thank you very much for your participation! \
    This experiment is part of a Cornell University scientific research project. \
    Your decision to complete participant is voluntary. There is no way for us to identify you. \
    The only information we will have, in addition to your responses, is the time at which \
    you completed the survey. The results of the research may be presented at scientific meetings \
    or published in scientific journals. Clicking on the link below indicates that you are at \
    least 18 years of age and agree to complete this experiment voluntarily.</p>")
    ,
    newButton("wait", "Click to start the experiment")
        .center()
        .print()
        .wait()
)

newTrial("info",
    defaultText
        .center()
        .print()
    ,
    newText("instructions-1", "Please fill out some background information about yourself.")
    ,
    newText("instructions-2", "<p>Please enter your age: </p>")
    ,
    newTextInput("age", "")
        .log()
        .lines(1)
        .length(2)
        .size(50, 25)
        .center()
        .print()
    ,
    newText("instructions-3", "<p>Are you a native speaker of English? [y/n] </p>")
    ,
    newTextInput("native_speaker", "")
        .log()
        .lines(1)
        .length(1)
        .lines(0)
        .size(50, 25)
        .center()
        .print()
    ,
    newText("newline", "\n")
    ,
    newButton("wait", "Continue")
        .center()
        .print()
        .wait()
)

newTrial("instructions1",
    defaultText
        .center()
        .print()
    ,
    newText("instructions-1", "Please rate each item in terms of its acceptability on a scale from 1–7, \
    with a 7 rating meaning that “the sentence is perfectly acceptable in English and that you can imagine \
    yourself or other native speakers saying it.")
        .center()
    ,
    newText("instructions-2", "<p>For example, please rate the acceptability of the following sentence: \n \
    The cat is black. <p>")
    ,
    newScale("acceptability", 7)
        .center()
        .before(newText("Unacceptable"))
        .after(newText( "Perfectly Acceptable"))
        .print()
        .wait()
    ,
    newButton("wait", "Continue")
        .center()
        .print()
        .wait()
)

newTrial("instructions2",
    defaultText
        .center()
        .print()
    ,
    newText("instructions-1", "<p>Please rate the acceptability of the following sentence: \n \
    Cat walk orange kick themselves. <p>")
    ,
    newScale("acceptability", 7)
        .center()
        .before(newText("Unacceptable"))
        .after(newText( "Perfectly Acceptable"))
        .print()
        .wait()
    ,
    newButton("wait", "Continue")
        .center()
        .print()
        .wait()
)

// Experimental trial
Template("items.csv", row =>
    newTrial("experimental-trial",
        newText("sentence", row.Sentence)
            .center()
            .print()
    ,
    newScale("response", 7)
        .log()
        .center()
        .before(newText("Unacceptable"))
        .after(newText( "Perfectly Acceptable"))
        .print()
        .wait()
    ,
    newButton("wait", "Continue")
        .center()
        .print()
        .wait()
    )
.log("itemType", "experimental")
.log("itemNo", row.Item)
.log("constructionType", row.Construction)
.log("gapType", row.Gap)
)

// filler trial
Template("fillers.csv", row =>
    newTrial("filler-trial",
        newText("sentence", row.Sentence)
            .center()
            .print()
    ,
    newScale("response", 7)
        .log()
        .center()
        .before(newText("Unacceptable"))
        .after(newText( "Perfectly Acceptable"))
        .print()
        .wait()
    ,
    newButton("wait", "Continue")
        .center()
        .print()
        .wait()
    )
    .log("itemType", "filler")
    .log("itemNo", "NA")
    .log("constructionType", "NA")
    .log("gapType", "NA")
    
)