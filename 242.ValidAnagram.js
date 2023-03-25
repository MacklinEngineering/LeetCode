/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 
 https://leetcode.com/problems/valid-anagram/
 
 Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 */
var isAnagram = function(s, t) {
    if (s.length === t.length){
    const sSorted = s.split("").sort().join("")
    const tSorted = t.split("").sort().join("")
    return sSorted === tSorted
    }else{
        return false
    }
};
