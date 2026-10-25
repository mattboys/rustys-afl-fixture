# Rusty's AFL Fixture Scheduling Problem

## Overview

Design an algorithm to complete an AFL (Australian Football League) regular-season fixture for 19 teams across 27 rounds. The fixture must satisfy every absolute rule and maximise compliance with the preferential rules, while preserving the supplied base fixture's locked matches, byes, venue assignments and broadcast slots.

The supplied material mentions a four-week finals series, but supplies no finals format, participants, venues or scheduling rules. It is therefore outside the specified scheduling problem.

## Key Parameters

| Parameter | Value |
|---|---|
| Teams | 19 |
| Regular-season rounds | 27 |
| Games per team | 24 (12 Home + 12 Away) |
| Byes per team | 3 |
| Games per round | Varies with the assigned byes; each round has the supplied broadcast slots |
| Matches played twice | 6 per team (Regular + Assigned + Conditional opponents) |
| Matches played once | 12 per team (remaining opponents) |
| Total regular-season matches | 228 (19 teams × 24 games ÷ 2) |

## Problem Structure

1. **Base fixture** provides a partially-filled schedule with:
   - Locked matches that cannot be moved
   - Mandatory match-ups per round
   - Pre-assigned time slots and venues for some games
   - Pre-filled Home/Away sequences for Fremantle and West Coast (heaviest travel burden)

2. **The algorithm must fill in the gaps** — assign opponents, venues, and Home/Away designations for all remaining slots — while satisfying all absolute rules and maximising preferential-rule compliance.

## Documentation Status

The Markdown files in this directory are the complete, current problem specification. They deliberately exclude superseded requirements, including the retired `Supplementary` ground allocation and obsolete cross-references.
