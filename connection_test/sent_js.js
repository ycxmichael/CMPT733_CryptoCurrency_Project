#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://hwa125:960923@ec2-3-19-67-238.us-east-2.compute.amazonaws.com', function(err, conn) {
  conn.createChannel(function(err, ch) {
    var q = 'predit1';
    var msg = 'Hello World!';

    ch.assertQueue(q, {durable: false});
    ch.sendToQueue(q, Buffer.from(msg));
    console.log(" [x] Sent %s", msg);
  });
  setTimeout(function() { conn.close(); process.exit(0) }, 500);
});