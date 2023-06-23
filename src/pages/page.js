"use client"
import React from 'react';
import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";
import Layout from '../ui-components/layout/layout';
import '@aws-amplify/ui-react/styles.css';
import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Card,
} from '@aws-amplify/ui-react';
Amplify.configure({ ...awsExports, ssr: true });


function Home() {
  return (
      <Layout>
        <Card>
          <Table
            size="small"
            variation="bordered"
          >
            <TableHead>
              <TableRow>
                <TableCell as="th">Citrus</TableCell>
                <TableCell as="th">Stone Fruit</TableCell>
                <TableCell as="th">Berry</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                <TableCell>Orange</TableCell>
                <TableCell>Nectarine</TableCell>
                <TableCell>Raspberry</TableCell>
                </TableRow>
                <TableRow>
                <TableCell>Grapefruit</TableCell>
                <TableCell>Apricot</TableCell>
                <TableCell>Blueberry</TableCell>
                </TableRow>
                <TableRow>
                <TableCell>Lime</TableCell>
                <TableCell>Peach</TableCell>
                <TableCell>Strawberry</TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </Card>
      </Layout>
  )
}
export default Home;

