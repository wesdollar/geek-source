## What to Test

I'll start by reiterating a pro tip I shared in the intro: testing the negative paths is more important than testing the positive paths. Don't get me wrong, we should strive to provide coverage for as much as possible, but I've found it to be a good habit to start with the negative paths. This approach tends to identify bugs earlier, but it also ensures I at least have my negative paths covered in case I find myself in a time crunch.

During development, we tend to go through the experience of the positive path dozens – if not hundreds – of times. Tt's reasonable to have a high level of confidence in the positive path given the frequency at which we traverse it. We'll often find all the bugs within the positive path, because we need that functionality to work in order to get to the next step of our engineering. The negative paths, however, get traveled much less, or perhaps, are even forgotten.

Here are some areas you should always be thinking about in terms of providing frontend test coverage:

* Helper functions
* Conditional rendering
* Conditional styling
* Error handling
* Graceful handling of potentially missing data
* Passed-in data is rendered appropriately

Snapshot testing is becoming more and more prevalent, especially in the React world. Snapshots are a super quick and reliable way to assert your UI looks as expected. I've found developers tend to get lazy with snapshot testing, though. All the concepts of testing apply to snapshot testing, as well, which is to say we should still be getting a snapshot for every variation of our UI, being mindful of the items mentioned above.

Mocking is what allows us to truly test our code in isolation, but it's something that a lot of people new to testing tend to overlook. Be sure to mock any functions/methods/components/etc that are being used by the code you're testing. Otherwise, your test becomes tightly coupled to the dependencies, which means your test could easily break for things unrelated to the code you're actually intending to test. If you're purposely writing an integration test, mocking obviously isn't needed, but you should always be mocking when writing unit tests.
