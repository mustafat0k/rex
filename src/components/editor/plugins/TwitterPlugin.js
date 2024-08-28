"use client"
import React,{useEffect} from "react";
import {createCommand, LexicalCommand} from 'lexical';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
export const INSERT_TWEET_COMMAND = createCommand();

export default function TwitterPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (!editor.hasNodes([TweetNode])) {
      throw new Error('TwitterPlugin: TweetNode not registered on editor (initialConfig.nodes)');
    }

    return editor.registerCommand(
      INSERT_TWEET_COMMAND,
      (payload) => {
        const tweetNode = $createTweetNode(payload);
        $insertNodeToNearestRoot(tweetNode);

        return true;
      },
      COMMAND_PRIORITY_EDITOR,
    );
  }, [editor]);

  return null;
}
