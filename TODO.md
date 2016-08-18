#### Breakdown

Reqs

- Git repository (init if it's not there?)
--- Unsaved changes? (deny with warning)

Transforms

- let/const
- arrow
- for-of
- template
- arg spread
- arg-spread
- obj-method
- obj-shorthand
- no-strict
- commonjs
- default-param
- class
- includes

Tasks

- Setup
--- Check git setup
--- Git init or ask to stage/commit local changes
--- Create new branch
--- Add a temporary config file (treat this as status/progress file?)
--- Give them the option of commiting this file or adding to .gitignore
- Start cycle
--- Throw gyan
--- Convert all but get diff for one file
--- If there's nothing that matches, tell them nothing to see here, move on.
--- Inform which files have been touched
--- Encourage them to commit (commit for them?)
- Show progress (1/13) Fancy progress bar please
- Pause/resume/reset
- Jump to topic

