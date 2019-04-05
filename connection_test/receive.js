var amqp = require('amqplib/callback_api');
// var express =  require('express');
// var app = express();

amqp.connect('amqp://hwa125:960923@ec2-3-19-67-238.us-east-2.compute.amazonaws.com', function(err, conn) {
  conn.createChannel(function(err, ch) {
    var q = 'predit';

    ch.assertQueue(q, {durable: false});
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
    ch.consume(q, function(msg) {
      console.log('What the hell')
      console.log(" [x] Received %s", msg.content.toString());
    }, {noAck: true});
  });
});

// process.stdout.write("hello: ");