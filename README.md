# CDK Take-Home Challenge

Welcome, and thank you for your interest in the DevOps role at Fortress Technology Solutions!

This take-home assignment is designed to help us understand how you approach infrastructure, CI/CD, and learning new technologies. Don't worry if you're unfamiliar with AWS CDK or GitHub Actions — we’re more interested in how you reason and learn.

---

## 🧩 Objective

Using the included starter project, complete the following:

### Part 1: AWS CDK Stack

Update the existing AWS CDK project to do the following:

- Create an **S3 bucket** for logging
- Create a **Lambda function** (you can use Node.js or Python)
  - This function should log the request to CloudWatch
- Create an **API Gateway** to expose the Lambda function publicly
- Make sure the Lambda function has permission to write to the bucket (you don’t have to implement writing to S3 in the Lambda)

✅ CDK stack should be deployable with `npx cdk deploy`

---

### Part 2: GitHub Actions Workflow

Set up the GitHub Actions workflow in `.github/workflows/deploy.yml` to:

- Install dependencies
- Build the TypeScript project
- Run `cdk synth`
- Run `cdk deploy` automatically on push to the `main` branch

We’ve included a working scaffold to help you get started.

---

## 🧠 Evaluation Focus

We’ll review your submission based on:

- ✅ Infrastructure design and completeness
- ✅ Effort and ability to work with CDK and GitHub Actions
- ✅ Code organization and clarity
- ✅ Clarity of your explanations and README

This is not a test of perfection — it's about **how you think**, not just what you build.

---

## 🔄 Bonus (Optional)

These are *completely optional* but demonstrate initiative:

- Add a simple environment-based naming convention (`MyStack-dev`)
- Deny public access to the S3 bucket
- Write the Lambda function to write event data into the S3 bucket

---

## 🚀 How to Submit

1. Create a **GitHub repository** (can be private)
2. Push your completed project
3. Include a short `README.md` with:
   - Deployment or testing instructions
   - Any assumptions, challenges, or learnings
4. Share access with: `you@example.com` (adjust to interviewer’s actual email)

---

## 📚 Resources

- [AWS CDK TypeScript Workshop](https://cdkworkshop.com/30-minutes/)
- [AWS CDK API Reference](https://docs.aws.amazon.com/cdk/api/v2/)
- [GitHub Actions Docs](https://docs.github.com/en/actions)

---

Good luck, and have fun! If you get stuck or have questions, feel free to note that in your README — we value transparency and learning mindset above all.
