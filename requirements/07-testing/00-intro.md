## Test-Driven Thinking

I'm constantly thinking about test coverage while I'm authoring code. This approach forces me to be smarter about my approach and inevitably leads to cleaner, easy-to-test code. I call this approach "test-driven thinking". But it applies to more than simply authoring code – it's a philosophy that guides my decisions from start to finish of any project.

I've often thought most developers and teams approach testing as if it's a luxury item – one of those things we'll do if we have time. Even I fall into this trap when I'm working on my pet projects. After all, we want to get our app live, and writing tests is just one more thing that's standing in the way of that deploy button.

**Rethink how we think about tests.**

I'm going to quickly lay out the benefits of writing tests, and I'll go into detail for each shortly after.

**Benefits of Writing Tests**
1. Forces us to be better developers
2. Refactor with peace of mind
3. Simplifies future implementations & maintenance
4. Exposes bugs
5. Documents the code
6. It saves time

> Pro Tip:
Writing tests for the negative paths in your code is much more valuable than writing tests for the positive paths. When time is short, start by testing the negative paths, saving the positive paths for the end. After all, bugs are rarely seen in the positive paths.

Before I go into detail about each benefit, I want to first debunk a few myths about testing.

**Myth: Testing is hard**
Every new skill is hard at first. Just like anything else in software, once you learn how to do it, it's quick and easy – and can be quite fun & rewarding (more on that in a minute). Learn the test suite, begin thinking from a testing perspective, and it'll all fall into place and no longer be one of those activities you dread.

**Myth: Testing is no fun**
Maybe I'm a masochist, but there's something in my brain that really enjoys watching the CLI turn from red to green. According to science, it's not just me, though. I'm no biology expert, but I do know there's a reward center in the brain that can make us feel good and release some of those wonderful brain things like dopamine when we get that rewarding feedback from the CLI indicating that our test(s) passed. It can be very satisfying. I've also found testing to be one of the more relaxing activities I do as a developer – but, again, I may be weird.

**Myth: It's not worth the time**
Yeah, I just have to call bullshit on this one. If your tests are taking some unearthly amount of time, your code likely sucks, or, at the very least, you need to spend some more time in your test suite's docs and practicing writing tests. Testing clean, SOLID code shouldn't be a huge time sink. In fact, you should be thinking about your tests while you're writing your code to ensure testing is quick, easy, and reliable.

**Myth: It adds no value**
I can usually tell you how long someone has been developing at a professional level based on how they value testing. Seasoned developers tend to find much more value in it, likely because a test has saved their ass on more than one occasion.

> Pro Tip:
If you don't value testing, it's time to change how you think about testing. You'll immediately level-up your development skills, and you'll come across as a more polished developer when people look at your code.

Alright, time to discuss the benefits in a bit more detail.

1. Forces us to be better developers
There are certain practices that we as developers will tend to adopt as a result of writing tests that ultimately make the code better and easier to maintain. You'll find that you're writing functions/methods that are smaller, clearer, and serve a very specific purpose. You'll refactor more so that things are extracted out to a single-source of truth or live in a spot where it can be shared by your functional code and the test, which means it's sitting there ready to be used elsewhere in your app in the future. It'll also change how you think about your code for the better. In the end, it's a win-win-win.

2. Refactor with peace of mind
Refactoring becomes an exercise of peace when the code has proper coverage because the concern of things breaking as a result of the refactor goes completely out the window. There have been so many times in my career that I loath the task of refactoring a chunk of code because the developer(s) before me didn't provide ample coverage. So... I start the refactor by providing test coverage so that I can have confidence in my refactor.

3. Simplifies future implementations & maintenance
Similarly to the refactor argument above, we can have much more confidence when we implement new features or extend existing functionality if we have proper code coverage in place. I've seen many developers accidentally break something because they extended the functionality of something without realizing it was being used in several other places they weren't familiar with. They didn't take those use cases into consideration – how could they – and it ultimately led to a bug that made it into production. Proper test coverage would have alerted them immediately and given them the opportunity to address it or rethink their implementation.

4. Exposes bugs
I was in the camp of "writing tests is a waste of time" for many years. Until one day, I was writing some tests and uncovered a bug because I was writing tests to cover the negative paths. My mind was kinda blown because I had been testing the UI myself for weeks and never once encountered this issue, but, lo and behold, my test shined a bright light on it. I quickly popped back over to the UI and recreated the bug on the first try. Turns out, that bug would've definitely affected a number of users in production, but thanks to my tests, I was able to address it.

5. Documents the code
Your test cases should end up describing the functionality of the code. I'll often take the business requirements and rewrite them as my test cases before I even start development. This gets me thinking from a testing perspective, and it also highlights any gaps in the requirements, so I just find it to be a very beneficial practice. In the future, when I need to recall the requirements of a certain section of the app, I know all I have to do is pop open the tests to jog my memory. Better yet, when someone comes in behind me, they can quickly get up to speed on the functionality by simply reading how the functionality is described in the tests.

6. It saves time
I get it, you're not buying it at the moment because you see writing tests as a time sink. Good testing habits actually end up saving time. I've seen so many developers waste countless seconds by jumping back and forth from their editor to the browser to test their code. Or, even better, they sit there for 20+ seconds waiting on the code build every time they press save and then hop over into the browser to test the one-line change they just made. Another handful of code by way of a test could have given them almost instant feedback via the CLI testing suite on whether or not their change produced the desired results without ever leaving the editor. Oops... it didn't work, no worries, I can trust tweak this... and green! Test watchers are a super fast mechanism by which we can iterate over ideas and *test* their efficacy. All these seconds switching between editor and browser, hitting reload, waiting on builds, all greatly add up over the course of a project. Why do something manually when you can write a few extra lines of code to automatically test your code for you? Over and over and over again.

---

Commit to writing tests, and you'll quickly discover it's not a burden nor something you dread. It'll become second nature to you, and you'll reap the benefits time and time again.
