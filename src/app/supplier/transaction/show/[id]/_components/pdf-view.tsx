import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  table: {
    display: 'flex',
    width: 'auto',
    margin: '10px 0',
    fontSize: 12,
    border: '1px solid black'
  },
  tableRow: {
    flexDirection: 'row'
  },
  tableColHeader: {
    width: '16.66%',
    borderRight: '1px solid black',
    backgroundColor: '#4F46E5',
    color: '#fff',
    padding: 8,
    textAlign: 'center'
  },
  tableCol: {
    width: '16.66%',
    borderRight: '1px solid black',
    padding: 8,
    textAlign: 'center'
  },
  tableCell: {
    fontSize: 10
  },
  tableColSpan: {
    flexGrow: 1,
    borderRight: '1px solid black',
    padding: 8,
    textAlign: 'left'
  }
})

const PDFView = () => {
  return (
    <Document>
      <Page
        size='A4'
        style={{
          flexDirection: 'column',
          fontSize: 14,
          paddingHorizontal: 20
        }}
      >
        <View
          style={{
            flexDirection: 'column',
            gap: 8,
            paddingVertical: 10,
            alignItems: 'center',
            borderBottom: '1px solid black'
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold'
            }}
          >
            SHOHEL MOTORS
          </Text>
          <Text>Address : CHADNI HALL MORE,GAFARGAON,MYMENSINGH</Text>
          <Text>Showroom : M/S SHOHEL MOTORS</Text>
          <Text>Mobile : 01713-109143 Or 01715-749394 Or 01716-735575</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginVertical: 20
          }}
        >
          <View
            style={{
              width: '100%',
              maxWidth: 300,
              flexDirection: 'column',
              gap: 8
            }}
          >
            <Text>Voucher No : 01195156</Text>
            <Text>Party Name: SALAM MOTORS</Text>
            <Text>Party ID: 003</Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              gap: 8
            }}
          >
            <Text>Date : 2024-09-03</Text>
            <Text>Create Time : 10:14:45 pm</Text>
          </View>
        </View>

        <View style={styles.table}>
          {/* Table Header */}
          <View style={styles.tableRow}>
            <Text style={styles.tableColHeader}>Paid By</Text>
            <Text style={styles.tableColHeader}>Transaction Type</Text>
            <Text style={styles.tableColHeader}>Paid</Text>
            <Text style={styles.tableColHeader}>Remission</Text>
            <Text style={styles.tableColHeader}>Previous Balance (Tk)</Text>
            <Text style={styles.tableColHeader}>Total Due</Text>
          </View>

          {/* Table Body */}
          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>DBBL</Text>
            <Text style={styles.tableCol}>Cash</Text>
            <Text style={styles.tableCol}>9900.00</Text>
            <Text style={styles.tableCol}>0.00</Text>
            <Text style={styles.tableCol}>10000.04</Text>
            <Text style={styles.tableCol}>100.04 [Payable]</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.tableColSpan}>
              In Word: Nine Thousand Nine Hundred Taka Only.
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default PDFView
