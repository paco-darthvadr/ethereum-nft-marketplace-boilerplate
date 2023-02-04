import { Card, Timeline, Typography } from "antd";
import React, { useMemo } from "react";
import { useMoralis } from "react-moralis";

const { Text } = Typography;

const styles = {
  title: {
    fontSize: "20px",
    fontWeight: "700",
  },
  text: {
    fontSize: "16px",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "0.5rem",
  },
  timeline: {
    marginBottom: "-45px",
  },
};

export default function QuickStart({ isServerInfo }) {
  const { Moralis } = useMoralis();

  const isInchDex = useMemo(
    () => (Moralis.Plugins?.oneInch ? true : false),
    [Moralis.Plugins?.oneInch]
  );

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Card style={styles.card} title={<h1 style={styles.title}>📝 To-Do List</h1>}>
        <Timeline mode="left" style={styles.timeline}>
          <Timeline.Item dot="📄">
            <Text >
              Download A Wallet{" "}
              <a
                href="https://verus.io/wallet"
                target="_blank"
                rel="noopener noreferrer"
              >
                Verus Wallet
              </a>{" "}
            </Text>
          </Timeline.Item>

          <Timeline.Item dot="💿">
            <Text >
              Grab A VerusID In Your Verus Wallet<Text code>Eg: friendlyNameSpace@ </Text>
            </Text>
          </Timeline.Item>

          <Timeline.Item dot="🧰">
            <Text >
              Sign Up For ID Watch{" "}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                SignUp
              </a>
            </Text>
          </Timeline.Item>

          <Timeline.Item dot="🔁">
          <Text >
              Verify Your Login{" "}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                Verify
              </a>
            </Text>
          </Timeline.Item>

          <Timeline.Item dot="💿">
            <Text delete={isInchDex} style={styles.text}>
              View Details{" "}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                Attestation
              </a>{" "}
            </Text>
          </Timeline.Item>

          <Timeline.Item dot="🚀">
            <Text style={styles.text}>Complete 👍!!!</Text>
          </Timeline.Item>
        </Timeline>
      </Card>
      <div>
        <Card
          style={styles.card}
          title={<h1 style={styles.title}>💣 Verus Mining & Staking</h1>}
        >
          <Timeline mode="left" style={styles.timeline}>
            <Timeline.Item dot="💿">
              <Text style={styles.text}>
                 Native Pools{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href=""
                >
                  Mining
                </a>{" "}
                and{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href=""
                >
                  Staking
                </a>{" "}
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="📡">
            <Text style={styles.text}>
                 Veth Pools{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href=""
                >
                  Mining
                </a>{" "}
                and{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href=""
                >
                  Staking
                </a>{" "}
              </Text>
            </Timeline.Item>
          </Timeline>
        </Card>
        <Card
          style={{ marginTop: "10px", ...styles.card }}
          title={<h1 style={styles.title}>📡 TO Chat Or Use PoolBot For Data</h1>}
        >
          <Timeline mode="left" style={styles.timeline}>
            <Timeline.Item dot="💿">
              <Text style={styles.text}>
                The chat allows for use of bot and chatroom with other users
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="⚙️">
              <Text style={styles.text}>
                Type ! followed by command to use bot <Text code>eg: !help</Text>
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="💾">
              <Text style={styles.text}>
                Please Be Be mindful of others while using chat
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="💾">
              <Text style={styles.text}>
                Welcome
              </Text>
            </Timeline.Item>
          </Timeline>
        </Card>
      </div>
    </div>
  );
}
